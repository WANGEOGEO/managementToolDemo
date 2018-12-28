// primary pages
var mainPage, membership, stuff, finance, inventory;
// page under membership
var allMembers, record, appointment, management, registration

/**
 * create main page 
 * @param {number} pageWidth  - width of the page
 * @param {number} pageHeight - height of the page
 * @param {*}      image      - image of button on main page
 * @param {[]}     shortcuts  - all shortcuts it have : findMember, newMember, checkout
 */
function createMainPage(pageWidth, pageHeight, image, shortcuts) {
    var member = new textButton (
            "会员管理",
            pageWidth * 0.2, pageHeight * 0.1,
            image
        );
        member.onClick = function () {
            setPage (MenuType.SND_MEMBERSHIP);
        };
        
    var finance = new textButton (
            "本店账务",
            pageWidth * 0.4, pageHeight * 0.1,
            image
        );
        finance.onClick = function () {
            setPage (MenuType.SND_FINANCE);
        };
        
    var staff = new textButton (
            "员工管理",
            pageWidth * 0.2, pageHeight * 0.5,
            image
        );
        staff.onClick = function () {
            setPage (MenuType.SND_STAFF);
        };
        
    var invent = new textButton (
            "库存管理",
            pageWidth * 0.4, pageHeight * 0.5,
            image
        );
        invent.onClick = function () {
            setPage (MenuType.SND_INVENTORY);
        };
    var buttons = [member, finance, staff, invent];
    return new page("店务系统", [], buttons, shortcuts);
}

function createVipPage(pageWidth, pageHeight, image, sizePara){
    var allVip = new textButton(
        "所有会员",
        pageWidth*0.05, pageHeight/7,
        image
    );

    var reservation = new textButton(
        "预约服务",
        pageWidth * 0.22, pageHeight/7,
        image
    );

    var maybeThere = new textButton(
        "可能会有",
        pageWidth * 0.39, pageHeight/7,
        image
    );

    var newVip = new textButton(
        "录入会员",
        pageWidth * 0.56, pageHeight/7,
        image
    );

    var comingRecord = new textButton(
        "来电记录",
        pageWidth*0.05, pageHeight * 0.6,
        image
    );

    var advertisement = new textButton(
        "信息推广",
        pageWidth*0.22, pageHeight * 0.6,
        image
    );

    var otherStuff = new textButton(
        "其他项目",
        pageWidth*0.39, pageHeight * 0.6,
        image
    );

    var goBack = new textButton(
        "返回上级",
        pageWidth*56, pageHeight * 0.6,
        image
    );
    var buttons = [allVip, reservation, maybeThere, newVip, comingRecord, advertisement, otherStuff, goBack];
    return new page("会员管理菜单", [], buttons, []);
}