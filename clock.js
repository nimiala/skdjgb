let templateX = 126;
let templateY = 319;
let backgroundColor = '#FFFFFF';
let foregroundColor = '#D81515';
let dummyCanvas = document.createElement('canvas');
let dummyCanvasContext = dummyCanvas.getContext('2d');
let templateWidth = dummyCanvas.width = (3 + 1) * 10 + 1;
dummyCanvas.height = 5 + 2;

let font = [[1,1,1,1,0,1,1,0,1,1,0,1,1,1,1],
[0,1,0,1,1,0,0,1,0,0,1,0,1,1,1],
[1,1,0,0,0,1,0,1,0,1,0,0,1,1,1],
[1,1,1,0,0,1,1,1,1,0,0,1,1,1,1],
[1,0,1,1,0,1,1,1,1,0,0,1,0,0,1],
[1,1,1,1,0,0,1,1,0,0,0,1,1,1,0],
[1,1,1,1,0,0,1,1,1,1,0,1,1,1,1],
[1,1,1,0,0,1,0,1,0,0,1,0,0,1,0],
[1,1,1,1,0,1,1,1,1,1,0,1,1,1,1],
[1,1,1,1,0,1,1,1,1,0,0,1,1,1,1]];

function myUpdate() {
    let time = Math.floor(Date.now() / 1000).toString(10).toUpperCase();
    
    for (const [index, number] of Array.from(time).entries()) {
        dummyCanvasContext.fillStyle = backgroundColor;
        dummyCanvasContext.fillRect(index*4, 0, 5, 7);
        dummyCanvasContext.fillStyle = foregroundColor;
        for(let i = 0; i < 5; i++)
            for(let j = 0; j < 3; j++)
                if(font[number][i*3+j])
                    dummyCanvasContext?.fillRect(1+index*4+j, 1+i, 1, 1);
    }

    dummyCanvas.toBlob((blob) => {
        var a = new FileReader();
        a.onload = function (e) {
            App.updateTemplate({
                use: true,
                url: e.target?.result,
                x: templateX,
                y: templateY,
                width: templateWidth,
            });
            //console.log(e.target?.result)
        }
        a.readAsDataURL(blob);
    });
}

setInterval(myUpdate, 1000);