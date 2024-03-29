const router = require("express").Router();
const User = require("../../models/database/schemas/User");
const Axios = require("axios");

router.get("/", (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.status(401).send({ msg: "Unauthorized" });
  }
});

router.post("/setup/:stage/", async (req, res, done) => {
  console.log("update")
  if (req.user) {
    const user = await User.findOne({ id: req.user.id });

    if (
      req.user &&
      !isNaN(req.params.stage) && !user.userRegisterState.completed
    ) {
      let body = {
        username: user.ingame.username,
        profile: user.ingame.profile,
        serveur: user.ingame.serveur,
        lang: user.ingame.lang,
      };
      let stage = {
        stage: user.userRegisterState.stage,
        completed: user.userRegisterState.completed,
      };
      if (req.user.userRegisterState.stage >= 1000) {
        res.status(401).send({ message: "Unauthorized." });
        done(null, null);
        return;
      }
      // Validation

      try {
        let message = { message: "Une erreur est survenue." };
        let errors = false;

        switch (req.params.stage) {
          case "0":
            if (
              req.body.username === undefined ||
              req.body.username.length < 3 ||
              req.body.username > 16
            ) {
              errors = true;
              message.message = "Veuillez renseigner un username valide !";
              break;
            }
            body.username = req.body.username.toLowerCase();
            break;

          case "1":
            if (
              req.body.profile === undefined ||
              req.body.profile.length < 3 ||
              req.body.profile > 16
            ) {
              errors = true;
              message.message = "Veuillez vérifier le lien !";
              break;
            }
            body.profile = req.body.profile;
            break;

          case "2":
            let lang = ["FR", "UK", "ES"];
            if (req.body.lang === undefined || !lang.includes(req.body.lang)) {
              errors = true;
              message.message = "Aucune langue selectionné.";
              break;
            }
            body.lang = req.body.lang;
            break;

          case "3":
            body.serveur = req.body.servers;
            break;

          case "4":
            if (verifyToken(req.body.token)) {
              stage.completed = true;
            } else {
              errors = true;
              message.message = " Recaptcha failed.";
            }

            break;

          default:
            console.log("default");
            errors = true;
            break;
        }
        if (errors) {
          res.status(400).send(message);
          return done(null, null);
        } else {
          stage.stage = stage.stage + 1;
        }
        const findUser = await User.findOneAndUpdate(
          { id: req.user.id },

          {
            ingame: body,
            userRegisterState: {
              stage: stage.stage,
              completed: stage.completed,
            },
          },
          { new: true }
        );

        if (findUser) {
          res.sendStatus(201);
          return done(null, findUser);
        } else {
          message.msg = "Unauthorized 76.";
          res.status(401).send({ message });
          done(null, null);
        }
      } catch (error) {
        console.log(error);
        return done(error, null);
      }
    } else {
      res.status(401).send({ message: "Unauthorized." });
    }
  } else {
    res.status(401).send({ message: "Unauthorized." });
  }
});

const verifyToken = async (token) => {
  let res = false;
  Axios.post(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      secret: token,
      response: process.env.CAPTCHA_SECRET_KEY,
    },
    {}
  )
    .then((res) => {
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

module.exports = router;
