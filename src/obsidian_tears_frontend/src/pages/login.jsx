import { Actor } from "@dfinity/agent";
import PlugConnect from "@psychedelic/plug-connect";
import * as React from "react";
import { obsidian_tears_backend as backendActor } from "../../../declarations/obsidian_tears_backend";
import Navbar from "../components/navbar";
import { characterCanisterId } from "../env";
import { connectToPlug } from "../providers/plugProvider";
import { connectToStoic } from "../providers/stoicProvider";

const Login = (props) => {
  const gameCanisterId = Actor.canisterIdOf(backendActor);
  const whitelist = [gameCanisterId, characterCanisterId];
  // asset urls
  const backgroundImageWood3 = { backgroundImage: "url(button-wood-3.png)" };

  return (
    <div
      id="body"
      style={{ backgroundImage: "url(background-large-obelisk.jpg)" }}
    >
      <Navbar />

      <div>
        <img src="menu-big-logo.png" alt="menu logo"></img>
        <>
          <div className="space50"></div>
          {false && (
            <div className="centerMe">
              <PlugConnect
                whitelist={whitelist}
                onConnectCallback={connectToPlug}
              />
              <br></br>
            </div>
          )}
          <div className="centerMe">
            <button
              className={"buttonWoodGridXL"}
              style={backgroundImageWood3}
              onClick={async () => {
                await connectToStoic(props.saveLogin, props.saveActors);
              }}
            >
              Connect to Stoic
            </button>
          </div>
          <br></br>
          <div className="space50"></div>
          <div className="centerMe">
            <img src="menu-fighter.png" alt="fighter" height="200px"></img>
          </div>
        </>
      </div>
    </div>
  );
};

export default Login;
