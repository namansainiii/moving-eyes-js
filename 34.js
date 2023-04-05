
let pupils = document.getElementsByClassName('eye1');
console.log(pupils);

let pupilsArr=Array.from(pupils);

//eye1 movement
let eye1start=-30;
let eye1range =70;
            //when you want the value from starting
            //let s = 0;

            //now i want the value from 300px (after first blue part)
            let startx = 0;
            let endx = window.innerWidth;
            let curx = 0;
            let fracx=0;
            let r = endx - startx ;


            let starty = 0;
            let endy = window.innerHeight;
            let cury = 0;
            let fracy=0;



            const mouseMove = (event) => {
                curx = event.x - startx;
                fracx=curx/r;
                cury = event.y;
                fracy=cury/endy;




let pupilscurx = eye1start + (fracx * eye1range);
let pupilscury= eye1start + (fracy * eye1range);

 
pupilsArr.forEach((cureye) => {
    cureye.style.transform= `translate( ${pupilscurx}px , ${pupilscury}px)`;
})


                //console.log(`x: ${curx/r} & y: ${cury/endy}`);
                
                
                //console.log(event.x);
                //console.log(`value of x: ${event.clientX}`);
               // console.log(`value of x: ${event.x} & value of y: ${event.y }`)
            }


const windowResize= (event) => {
    endx = window.innerWidth;
    r = endx - startx ;
    endy = window.innerHeight;
}


            window.addEventListener('mousemove',mouseMove);
            window.addEventListener('resize',windowResize);
