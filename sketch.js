// 如何调用另外一个js文件 https://www.jianshu.com/p/7dfd612693bc
var mouseIsPressing; //mouseIsPressing显示是否我之前已经摁下去鼠标了只是还没来得及抬起来
var bg;
var whichMenu; //0为初始菜单，1为会员管理下的二级菜单，2为录入会员信息的界面，3为查看全体会员信息的界面。
var firstIcon;
var secondIcon;
var data = {}; // 读取原始JSON.
var vips = []; //用来装会员的list。

var mainPage;
var testbutton;

function loadData() {

}

function addVip() {
  //用来增加会员
}
function setPage (page) {
  whichMenu = page;
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage("assets/bg.png");
    firstIcon = loadImage("assets/prime.png");
    secondIcon = loadImage("assets/second.png");
    whichMenu = 0;
    textAlign(CENTER, CENTER);
    textSize(40);
    mainPage = createMainPage (windowWidth, windowHeight, firstIcon, []);
}
  
function draw() {
    background(bg);
    //还在主菜单时
    if (whichMenu==0) {
      // image(firstIcon, width/10, height/7, firstIcon.width/2, firstIcon.height/2); //top-left corner
      // image(firstIcon, 1.3*width/10 + firstIcon.width/2, height/7, firstIcon.width/2, firstIcon.height/2); //top-right corner
      // image(firstIcon, width/10, 1.3*height/7 + firstIcon.height/2, firstIcon.width/2, firstIcon.height/2); //bottom-left corner
      // image(firstIcon,1.3*width/10 + firstIcon.width/2, 1.3*height/7 + firstIcon.height/2, firstIcon.width/2, firstIcon.height/2); //bottom-right corner
      mainPage.drawImage(0.7);
      // fill(0); //set text color to black
      // text("会员管理", width/10+firstIcon.width/4, height/7+firstIcon.height/4); //左上角会员管理按钮的txt
      // text("账务管理", 1.3*width/10 + firstIcon.width/2+firstIcon.width/4, height/7+firstIcon.height/4); //右上角账务管理按钮的txt
      // text("员工管理", width/10+firstIcon.width/4,  1.3*height/7 + firstIcon.height/2+firstIcon.height/4); //左下角员工管理按钮的txt
      // text("库存管理", 1.3*width/10 + firstIcon.width/2+firstIcon.width/4, 1.3*height/7 + firstIcon.height/2+firstIcon.height/4); //右下角库存管理按钮的txt 
      if (!mouseIsPressing && mouseIsPressed) {
        mouseIsPressing = true;
        for (var i = 0; i < mainPage.buttons.length; i++) {
          if (mainPage.buttons[i].button.isClicked(mouseX, mouseY, 0.7)) {
              whichMenu = i + 1;
          }
        }
      } else {
        mouseIsPressing = false;
      }
    } //进入会员管理菜单后 
    else if (whichMenu==1) {
      image(secondIcon, width/10, height/7, secondIcon.width/1.5, secondIcon.height/1.5); //第一排最左边
      image(secondIcon, 1.3*width/10 + secondIcon.width/1.5, height/7, secondIcon.width/1.5, secondIcon.height/1.5); //第一排中间
      image(secondIcon, 1.6*width/10 + 2*secondIcon.width/1.5, height/7, secondIcon.width/1.5, secondIcon.height/1.5); //第一排右数第二个
      image(secondIcon, 1.9*width/10 + 3*secondIcon.width/1.5, height/7, secondIcon.width/1.5, secondIcon.height/1.5); //第一排最右
      image(secondIcon, width/10, 1.3*height/7 + secondIcon.height/1.5, secondIcon.width/1.5, secondIcon.height/1.5); //第二排最左边
      image(secondIcon, 1.3*width/10 + secondIcon.width/1.5, 1.3*height/7 + secondIcon.height/1.5, secondIcon.width/1.5, secondIcon.height/1.5); //第二排中间
      image(secondIcon, 1.6*width/10 + 2*secondIcon.width/1.5, 1.3*height/7 + secondIcon.height/1.5, secondIcon.width/1.5, secondIcon.height/1.5); //第二排右数第二
      image(secondIcon, 1.9*width/10 + 3*secondIcon.width/1.5, 1.3*height/7 + secondIcon.height/1.5, secondIcon.width/1.5, secondIcon.height/1.5); //第二排最右
      fill(0); //set text color to black
      text("所有会员", width/10 + secondIcon.width/3, height/7 + secondIcon.height/3);//思路同上，再度表演枚举赋值。
      text("预约服务", 1.3*width/10 + secondIcon.width/1.5 + secondIcon.width/3, height/7 + secondIcon.height/3);
      text("可能会有", 1.6*width/10 + 2*secondIcon.width/1.5 + secondIcon.width/3, height/7 + secondIcon.height/3);
      text("新增会员", 1.9*width/10 + 3*secondIcon.width/1.5 + secondIcon.width/3, height/7 + secondIcon.height/3);//新增会员
      text("来电记录", width/10 + secondIcon.width/3, 1.3*height/7 + secondIcon.height/3 + secondIcon.height/1.5);
      text("信息推广", 1.3*width/10 + secondIcon.width/1.5 + secondIcon.width/3, 1.3*height/7 + secondIcon.height/3 + secondIcon.height/1.5);
      text("其他项目", 1.6*width/10 + 2*secondIcon.width/1.5 + secondIcon.width/3, 1.3*height/7 + secondIcon.height/3 + secondIcon.height/1.5);
      text("返回上级", 1.9*width/10 + 3*secondIcon.width/1.5 + secondIcon.width/3, 1.3*height/7 + secondIcon.height/3 + secondIcon.height/1.5);
    } //进入会员信息录入界面 
    else if (whichMenu==2) {
      //这三个createInput()没法点进去输入，很神奇，不知道是为了什么，是不是mousePressed干扰了他
      console.log("2");
      inputName = createInput();
      inputName.position(width/2 - 50, height/4);
      inputAge = createInput();
      inputAge.position(width/2 - 50, height/4 + 40);
      inputPhone = createInput();
      inputPhone.position(width/2 - 50, height/4 + 80);
    }
    else if (whichMenu==3) {
      console.log("3");
    } else if (whichMenu==4) {
      console.log("4");
    }
}

  //这个function负责处理点击事务，如果以后没问题会把上面的东西去掉。
  // function mousePressed() {
  //   if (whichMenu == 0) {
  //     //用于捕捉点击会员管理
  //     if (mouseX >= width/10 && mouseY >= height/7 && mouseX <= width/10 + firstIcon.width/2 && mouseY <= height/7 + firstIcon.height/2) {
  //       whichMenu = 1;
  //     }
  //   } else if (whichMenu == 1) {
  //     //用于捕捉点击所有会员
  //     if (mouseX >= width/10 && mouseY >= height/7 && mouseX <= width/10 + secondIcon.width/1.5 && mouseY <= height/7 + secondIcon.height/1.5) {
  //       whichMenu = 3;
  //     }
  //     //用于捕捉点击新增会员 
  //     else if (mouseX >= 1.9*width/10 + 3*secondIcon.width/1.5 && mouseY >= height/7 && mouseX <= 1.9*width/10 + 3*secondIcon.width/1.5 + secondIcon.width/1.5 && mouseY <= height/7 + secondIcon.height/1.5) {
  //       whichMenu = 2;
  //     } 
  //     //用于捕捉返回上级
  //     else if (mouseX >= 1.9*width/10 + 3*secondIcon.width/1.5 && mouseY >= 1.3*height/7 + secondIcon.height/1.5 && mouseX <= 1.9*width/10 + 3*secondIcon.width/1.5 + secondIcon.width/1.5 && mouseY <= 1.3*height/7 + secondIcon.height/1.5 + secondIcon.height/1.5) {
  //       whichMenu = 0;
  //     }
  //   }
  //} 

