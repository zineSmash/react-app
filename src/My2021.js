
function Pacman() {
    return (
        <div>
            <h1>2021년 유니티 교육 과정 이수</h1>
            <p>예일직업학교 2020년 5월~2020년 11월</p>
            <iframe //width="690" height="359" 
                src="https://www.youtube.com/embed/5QvHhNl5NIE" 
                title="유니티로 만든 팩맨 모작" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe><br/>
            ----------------------------------------------------------
        </div>
    )
}

function Battleship() {
    return (
        <div>
            <iframe //width="690" height="388" 
                src="https://www.youtube.com/embed/HzgqcBOXNi4" 
                title="유니티로 만든 해상전투게임 배틀쉽 플레이 영상" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe><br/>
            ----------------------------------------------------------
       </div>
    )
}

function SavingSoldier() {
    return (
        <div>
            <iframe //width="690" height="388" 
                src="https://www.youtube.com/embed/ZqtO7ObX1W4" 
                title="SavingSoldier 제작 중 영상" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" r
                eferrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe><br/>
            ----------------------------------------------------------
       </div>
       
    )
}

function My2021(){
    return(
        <div>
            <Pacman />
            <Battleship />
            <SavingSoldier />
        </div>
    )   
}

export default My2021;