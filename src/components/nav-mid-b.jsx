import React from "react";
import Card from "./card";

function NavMidB(props) {
  return (
    <div className="nav-mid-b" id="nav-mid-b">
      <div className="mid-b-up">
        <div className="title" id="title-b">
          Tu música de uso intensivo
        </div>
      </div>
      <div className="mid-b-down">
        <Card
          artist="Artist"
          albumTitle="Album Title"
          albumAlt="Album Alt"
          albumImg="https://picsum.photos/142"
        />
        <Card
          artist="Artist"
          albumTitle="Album Title"
          albumAlt="Album Alt"
          albumImg="https://picsum.photos/137"
        />
        <Card
          artist="Artist"
          albumTitle="Album Title"
          albumAlt="Album Alt"
          albumImg="https://picsum.photos/138"
        />
        <Card
          artist="Artist"
          albumTitle="Album Title"
          albumAlt="Album Alt"
          albumImg="https://picsum.photos/139"
        />
        <Card
          artist="Artist"
          albumTitle="Album Title"
          albumAlt="Album Alt"
          albumImg="https://picsum.photos/140"
        />
        <Card
          artist="Artist"
          albumTitle="Album Title"
          albumAlt="Album Alt"
          albumImg="https://picsum.photos/141"
        />
        <Card
          artist="Artist"
          albumTitle="Album Title"
          albumAlt="Album Alt"
          albumImg="https://picsum.photos/143"
        />
      </div>
    </div>
  );
}
export default NavMidB;
