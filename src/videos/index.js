import React, { Component } from "react";
import YouTube from "react-youtube";

const altura = 270;
const largura = 800;
const alturaMobile = 300;
const larguraMobile = 300;

class Video1 extends React.Component {
  render() {
    const opts = {
      height: altura,
      width: largura,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        start: 1,
        showinfo: 0,
        rel: 0,
      },
    };

    return (
      <YouTube videoId="quMsPtUcQHE" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

class Video2 extends React.Component {
  render() {
    const opts = {
      height: 800,
      width: 1300,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <YouTube videoId="20bd8EwWmss" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

class Video3 extends React.Component {
  render() {
    const opts = {
      height: altura,
      width: largura,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <YouTube videoId="ISQXAD4ryvo" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

class Video4 extends React.Component {
  render() {
    const opts = {
      height: altura,
      width: largura,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <YouTube videoId="dspFS1nL9MY" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

class VideoMobile1 extends React.Component {
  render() {
    const opts = {
      height: alturaMobile,
      width: larguraMobile,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <YouTube videoId="YE0wipdzEc0" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

class VideoMobile2 extends React.Component {
  render() {
    const opts = {
      height: alturaMobile,
      width: larguraMobile,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <YouTube videoId="bJHLbSNxoTg" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

class VideoMobile3 extends React.Component {
  render() {
    const opts = {
      height: alturaMobile,
      width: larguraMobile,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <YouTube videoId="ISQXAD4ryvo" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

class VideoMobile4 extends React.Component {
  render() {
    const opts = {
      height: alturaMobile,
      width: larguraMobile,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <YouTube videoId="dspFS1nL9MY" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export {
  Video1,
  Video2,
  Video3,
  Video4,
  VideoMobile1,
  VideoMobile2,
  VideoMobile3,
  VideoMobile4,
};
