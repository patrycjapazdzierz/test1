let x = 3
switch (x) {
    case 1:
    case 2:
    case 3:
        if (x==1) console.log('x wynosi 1')
        else if (x==2) console.log('x wynosi 2')
        else console.log('x wynosi 3')
        break;
    case 4:
        console.log('x wynosi 4') 
        break; 
    case 5:
        console.log('x wynosi 5')
        break;
    default:
        console.log('zadna z powyzszych opcji nie zostala wybrana')          
}