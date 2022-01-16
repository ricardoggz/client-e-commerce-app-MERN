import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPeopleFill,
  BsShieldFillCheck,
  BsFillPersonCheckFill,
  BsGlobe2,
  BsFillCheckCircleFill,
  BsFillFileLockFill,
} from "react-icons/bs";
import { FooterWrapper, FooterList } from "./elements";
import { GridLayout } from "../gridLayout/GridLayout";

export const Footer = () => {
  return (
    <FooterWrapper>
      <GridLayout>
        <FooterList>
          <ul>
            <span>Nosotros</span>
            <li>
              <BsFillCheckCircleFill /> ¿Quiénes somos?
            </li>
            <li>
              <BsPeopleFill /> Nuestro equipo de trabajo
            </li>
            <li>
              <BsFillPersonCheckFill /> Nuestro desarrollador
            </li>
          </ul>
        </FooterList>
        <FooterList>
          <ul>
            <span>Política</span>
            <li>
              <BsGlobe2 /> Legal
            </li>
            <li>
              <BsShieldFillCheck /> Privacidad
            </li>
            <li>
              <BsFillFileLockFill /> Términos y condiciones
            </li>
          </ul>
        </FooterList>
        <FooterList>
          <ul>
            <span>Nuestras redes</span>
            <li>
              <BsFacebook /> Facebook
            </li>
            <li>
              <BsTwitter /> Twitter
            </li>
            <li>
              <BsInstagram /> Instagram
            </li>
          </ul>
        </FooterList>
      </GridLayout>
    </FooterWrapper>
  );
};
