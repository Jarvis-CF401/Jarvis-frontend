import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const matrix = canvasRef.current;
    const ctx = matrix.getContext('2d');

    const config = {
      amount: 70,  // number of columns
      speed: 100,  // time between updates in ms
      size: 15,    // size of characters in px
      minLength: 5,
      maxLength: 11,
      firstColor: "#3acfbb",
      color: '#3acfbb'
    };

    let datarray = [];

    const width = ctx.canvas.width = window.innerWidth;
    const height = ctx.canvas.height = window.innerHeight;

    class Data {
      constructor(x) {
        this.x = x;
        this.y = 0;
        this.history = [];
        this.historySizeMax = Math.floor(Math.random() * config.maxLength + config.minLength);
      }

      update() {
        this.y += config.size;
        if (this.y >= height + this.historySizeMax * config.size) {
          datarray.splice(datarray.indexOf(this), 1);
          putData();
        }

        this.history.unshift(String.fromCharCode(60 + Math.floor(Math.random() * 62)));
        if (this.history.length > this.historySizeMax) this.history.pop();
      }

      draw() {
        if (Math.random() > 0.995) return;

        ctx.fillStyle = config.firstColor;
        ctx.fillText(this.history[0], this.x, this.y);

        ctx.fillStyle = config.color;
        for (let i = 1, char; (char = this.history[i]); i++) {
          ctx.fillText(char, this.x, this.y - i * config.size);
        }
      }
    }

    const count = Math.floor(width / config.size);

    function putData() {
      const newX = Math.floor(Math.random() * count) * config.size;

      for (let i = 0, row; (row = datarray[i]); i++) {
        if (row.x === newX && row.y - row.historySizeMax * config.size + config.size < config.size) return;
      }
      datarray.push(new Data(newX));
    }

    ctx.font = `${config.size}px monospace`;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 6;
    ctx.shadowColor = config.color;

    const interval = setInterval(() => {
      ctx.clearRect(0, 0, width, height);

      if (datarray.length < config.amount) putData();

      for (let i = 0, column; (column = datarray[i]); i++) {
        column.update();
        column.draw();
      }
    }, config.speed);

    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} id="matrix" style={{ display: 'block', width: '100%', height: '100%' }}></canvas>;
};

export default ParticleBackground;