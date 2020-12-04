import React from 'react'

import club2 from "../images/cards/Playing_card_club_2.svg";
import club3 from "../images/cards/Playing_card_club_3.svg";
import club4 from "../images/cards/Playing_card_club_4.svg";
import club5 from "../images/cards/Playing_card_club_5.svg";
import club6 from "../images/cards/Playing_card_club_6.svg";
import club7 from "../images/cards/Playing_card_club_7.svg";
import club8 from "../images/cards/Playing_card_club_8.svg";
import club9 from "../images/cards/Playing_card_club_9.svg";
import club10 from "../images/cards/Playing_card_club_10.svg";
import clubA from "../images/cards/Playing_card_club_A.svg";
import clubJ from "../images/cards/Playing_card_club_J.svg";
import clubK from "../images/cards/Playing_card_club_K.svg";
import clubQ from "../images/cards/Playing_card_club_Q.svg";

import diamond2 from "../images/cards/Playing_card_diamond_2.svg";
import diamond3 from "../images/cards/Playing_card_diamond_3.svg";
import diamond4 from "../images/cards/Playing_card_diamond_4.svg";
import diamond5 from "../images/cards/Playing_card_diamond_5.svg";
import diamond6 from "../images/cards/Playing_card_diamond_6.svg";
import diamond7 from "../images/cards/Playing_card_diamond_7.svg";
import diamond8 from "../images/cards/Playing_card_diamond_8.svg";
import diamond9 from "../images/cards/Playing_card_diamond_9.svg";
import diamond10 from "../images/cards/Playing_card_diamond_10.svg";
import diamondA from "../images/cards/Playing_card_diamond_A.svg";
import diamondJ from "../images/cards/Playing_card_diamond_J.svg";
import diamondK from "../images/cards/Playing_card_diamond_K.svg";
import diamondQ from "../images/cards/Playing_card_diamond_Q.svg";

import heart2 from "../images/cards/Playing_card_heart_2.svg";
import heart3 from "../images/cards/Playing_card_heart_3.svg";
import heart4 from "../images/cards/Playing_card_heart_4.svg";
import heart5 from "../images/cards/Playing_card_heart_5.svg";
import heart6 from "../images/cards/Playing_card_heart_6.svg";
import heart7 from "../images/cards/Playing_card_heart_7.svg";
import heart8 from "../images/cards/Playing_card_heart_8.svg";
import heart9 from "../images/cards/Playing_card_heart_9.svg";
import heart10 from "../images/cards/Playing_card_heart_10.svg";
import heartA from "../images/cards/Playing_card_heart_A.svg";
import heartJ from "../images/cards/Playing_card_heart_J.svg";
import heartK from "../images/cards/Playing_card_heart_K.svg";
import heartQ from "../images/cards/Playing_card_heart_Q.svg";

import spade2 from "../images/cards/Playing_card_spade_2.svg";
import spade3 from "../images/cards/Playing_card_spade_3.svg";
import spade4 from "../images/cards/Playing_card_spade_4.svg";
import spade5 from "../images/cards/Playing_card_spade_5.svg";
import spade6 from "../images/cards/Playing_card_spade_6.svg";
import spade7 from "../images/cards/Playing_card_spade_7.svg";
import spade8 from "../images/cards/Playing_card_spade_8.svg";
import spade9 from "../images/cards/Playing_card_spade_9.svg";
import spade10 from "../images/cards/Playing_card_spade_10.svg";
import spadeA from "../images/cards/Playing_card_spade_A.svg";
import spadeJ from "../images/cards/Playing_card_spade_J.svg";
import spadeK from "../images/cards/Playing_card_spade_K.svg";
import spadeQ from "../images/cards/Playing_card_spade_Q.svg";


const images = {
  "club2": club2,
  "club3": club3,
  "club4": club4,
  "club5": club5,
  "club6": club6,
  "club7": club7,
  "club8": club8,
  "club9": club9,
  "club10": club10,
  "clubA": clubA,
  "clubJ": clubJ,
  "clubK": clubK,
  "clubQ": clubQ,

  "diamond2": diamond2,
  "diamond3": diamond3,
  "diamond4": diamond4,
  "diamond5": diamond5,
  "diamond6": diamond6,
  "diamond7": diamond7,
  "diamond8": diamond8,
  "diamond9": diamond9,
  "diamond10": diamond10,
  "diamondA": diamondA,
  "diamondJ": diamondJ,
  "diamondK": diamondK,
  "diamondQ": diamondQ,

  "spade2": spade2,
  "spade3": spade3,
  "spade4": spade4,
  "spade5": spade5,
  "spade6": spade6,
  "spade7": spade7,
  "spade8": spade8,
  "spade9": spade9,
  "spade10": spade10,
  "spadeA": spadeA,
  "spadeJ": spadeJ,
  "spadeK": spadeK,
  "spadeQ": spadeQ,

  "heart2": heart2,
  "heart3": heart3,
  "heart4": heart4,
  "heart5": heart5,
  "heart6": heart6,
  "heart7": heart7,
  "heart8": heart8,
  "heart9": heart9,
  "heart10": heart10,
  "heartA": heartA,
  "heartJ": heartJ,
  "heartK": heartK,
  "heartQ": heartQ,
}


const Card = ({name}) => { 
  return (
    <div>
      <img className="card" src={images[name]} alt={name}/>
    </div>
  )
}

export default Card;