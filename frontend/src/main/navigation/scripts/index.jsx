
function easeOut(value){
    return 1 - Math.pow(1 - value, 4);
}

function animateScroll(doc, initialPosition){
    let start;
    let position ;
    let animationFrame;
    let duration = 3000;

    function step(timestamp){
        if(!start){
            start = timestamp;
        }

        const elapsed = timestamp - start;
        const relativeProgress = elapsed / duration;
        const easedOut = easeOut(relativeProgress);

        position = initialPosition - initialPosition * easedOut;
        if(position < 0){
            position = 0;
        }

        doc.scrollTo({top: position, behavior: 'instant'});
        if(elapsed < duration){
            animationFrame = window.requestAnimationFrame(step);
        }
        if(position === 0){
            cancelAnimationFrame(animationFrame);
        }
    }
    animationFrame = window.requestAnimationFrame(step);
}

export{animateScroll}
