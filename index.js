function scuberGreetingForFeet(feet){
  let greeting;
  if(feet <= 400){
    greeting = "This one is on me!";
  } else if (feet <= 2500){
    greeting = "I will gladly take your thirty bucks.";
  } else{
    greeting = "No can do.";
  }
  return greeting;
}

function ternaryCheckCity(city){
  let reply = city === 'NYC' ? 'Ok, sounds good.':'No go.';
  return reply
}

function switchOnCharmFromTip(tip){
  let reply;
  switch(tip){
    case 'generous':
      reply = 'Thank you so much.';
      break;
    case 'not as generous':
      reply = 'Thank you.';
      break;
    default:
      reply = 'Bye.';
      break;
  }
  return reply;
}
