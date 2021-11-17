

  let cir = ['|  ', '/  ', '-  ', '\\  ', '|  ', '/  ', '-  ', '\\  ', '|  \n'];
  let t = 100;
  cir.forEach(ele => {
    setTimeout(() => {
        process.stdout.write('\r' + ele); 
      }, t);
    t += 200;
  });