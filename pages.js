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
            pageWidth * 0.1, pageHeight * 0.15,
            image
        );
        member.onClick = function () {
            setPage (MenuType.SND_MEMBERSHIP);
        };
        
    var finance = new textButton (
            "本店账务",
            pageWidth * 0.3, pageHeight * 0.15,
            image
        );
        finance.onClick = function () {
            setPage (MenuType.SND_FINANCE);
        };
        
    var staff = new textButton (
            "员工管理",
            pageWidth * 0.1, pageHeight * 0.55,
            image
        );
        staff.onClick = function () {
            setPage (MenuType.SND_STAFF);
        };
        
    var invent = new textButton (
            "库存管理",
            pageWidth * 0.3, pageHeight * 0.55,
            image
        );
        invent.onClick = function () {
            setPage (MenuType.SND_INVENTORY);
        };
    var buttons = [member, finance, staff, invent];
    return new page("店务系统", [], buttons, shortcuts);
}