import React from "react";
import {useTranslation} from "react-i18next";
import "./Welcome.css";
import {Value} from "@solid/react";


export const Welcome = () => {
    const {t} = useTranslation();

    return (
        <section id="welcomeTest">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <img className="myImg" src={process.env.PUBLIC_URL + "/img/logoViaDe.svg"} alt="Logo ViaDe"></img>
                        </div>
                        <div className="col-sm value-format">
                            <h1 className="h1-welcome" id="h1-welcome">{t("welcome.welcome")}</h1>
                            <Value src="user.name"></Value>
                        </div>
                        <div className="col-sm">
                            <h2 id="h2-welcome" className="myH2">{t("welcome.title")}</h2>
                            <ul className = "welcomeLinks" >
                                <li>{t("welcome.presentation")}</li>
                                <li id = "linkDoc" className = "welcomeLinkDocs"><a
                                    href="https://arquisoft.github.io/viade_es1c/docs/">{t("welcome.documentation")}</a>
                                </li >
                                <li id = "linkBuild" className = "welcomeLinksViade" ><a href="https://github.com/Arquisoft/viade_es1c">{t("welcome.repository")}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Welcome;