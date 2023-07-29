import React from "react";

export interface WrapperProps {
    children: React.ReactNode;
  }

  type Image={
    guid: string,
    offsetPercentageX: number,
    offsetPercentageY: number,
    width: number,
    height: number,
    url: string
  }

  export interface CollectionItem{
        links: {
            self: string,
            web: string
        },
        id: string,
        objectNumber: string,
        title: string,
        hasImage: boolean,
        principalOrFirstMaker: string,
        longTitle: string,
        showImage: boolean,
        permitDownload: boolean,
        webImage: Image,
        headerImage: Image,
        productionPlaces: []
  }

  export interface CollectionInterface{
    label:{
        description:string,
    makerLine:string,
    notes:string,
    title:string,
    }
    webImage:Image,
    subTitle:string
}