import { GatsbySSR } from "gatsby";
import React from "react";

export const serveStaticFont: GatsbySSR["onRenderBody"] = ({
  setHeadComponents,
}) => {
  setHeadComponents([
    <link
      key='Poppins-Black'
      rel='preload'
      href='/fonts/Poppins-Black.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins-BlackItalic'
      rel='preload'
      href='/fonts/Poppins-BlackItalic.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins-Bold'
      rel='preload'
      href='/fonts/Poppins-Bold.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins-BoldItalic'
      rel='preload'
      href='/fonts/Poppins-BoldItalic.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins-ExtraBold'
      rel='preload'
      href='/fonts/Poppins-ExtraBold.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins-ExtraBoldItalic'
      rel='preload'
      href='/fonts/Poppins-ExtraBoldItalic.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins-ExtraLight'
      rel='preload'
      href='/fonts/Poppins-ExtraLight.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins-ExtraLightItalic'
      rel='preload'
      href='/fonts/Poppins-ExtraLightItalic.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins-Poppins-Light'
      rel='preload'
      href='/fonts/Poppins-Light.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins-Poppins-Italic'
      rel='preload'
      href='/fonts/Poppins-Italic.ttf'
      as='font'
      crossOrigin='anonymous'
    />,

    <link
      key='Poppins-Medium-Bold'
      rel='preload'
      href='/fonts/Poppins-Medium.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins-LightItalic'
      rel='preload'
      href='/fonts/Poppins-LightItalic.ttf'
      as='font'
      crossOrigin='anonymous'
    />,

    <link
      key='Poppins-Bold'
      rel='preload'
      href='/fonts/Poppins-Regular.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins-MediumItalic'
      rel='preload'
      href='/fonts/Poppins-MediumItalic.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins-SemiBold'
      rel='preload'
      href='/fonts/Poppins-SemiBold.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins-SemiBoldItalic'
      rel='preload'
      href='/fonts/Poppins-SemiBoldItalic.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins-Thin'
      rel='preload'
      href='/fonts/Poppins-Thin.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
    <link
      key='Poppins-ThinItalic'
      rel='preload'
      href='/fonts/Poppins-ThinItalic.ttf'
      as='font'
      crossOrigin='anonymous'
    />,
  ]);
};
