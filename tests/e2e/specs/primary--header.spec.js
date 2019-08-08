/**
 * Generated by https://github.com/dsheiko/puppetry
 * on Tue Aug 06 2019 07:22:36 GMT+0530 (IST)
 * Suite: Primary Header
 */

var nVer = process.version.match(/^v(\d+)/);
if (!nVer || nVer[1] < 9) {
  console.error(
    "WARNING: You have an outdated Node.js version " +
      process.version +
      ". You need at least v.9.x to run this test suite."
  );
}

const { bs, util, fetch, localStorage } = require("../lib/bootstrap")(
    "Primary--Header"
  ),
  devices = require("puppeteer/DeviceDescriptors");

jest.setTimeout(50000);

util.cleanupScreenshotsDir();

// Environment variables
const ENV = {};

const SITE_TITLE = async () => bs.query(".site-title", "SITE_TITLE");
const SITE_TITLE_A = async () => bs.query(".site-title a", "SITE_TITLE_A");
const INPUT_ID_USER_LOGIN = async () =>
  bs.query("#user_login", "INPUT_ID_USER_LOGIN");
const INPUT_ID_USER_PASS = async () =>
  bs.query("#user_pass", "INPUT_ID_USER_PASS");
const CP_HEADER = async () =>
  bs.query("#accordion-panel-panel-header-group", "CP_HEADER");
const CS_SITE_TITLE = async () =>
  bs.query("#accordion-section-title_tagline", "CS_SITE_TITLE");
const SITE_TITLE_POP_TYP = async () =>
  bs.query(
    "#customize-control-astra-settings-site-title-typography .ast-adv-toggle-icon",
    "SITE_TITLE_POP_TYP"
  );
const SITE_TITLE_FONT_SIZE_DESKTOP = async () =>
  bs.query(
    "#customize-control-astra-settings-site-title-typography .ast-responsive-input.desktop",
    "SITE_TITLE_FONT_SIZE_DESKTOP"
  );
const CUSTOMIZE_SAVE = async () =>
  bs.query("#customize-save-button-wrapper .save", "CUSTOMIZE_SAVE");
const H3_CLASS_ACCORDION_SECTION_TITLE = async () =>
  bs.query(
    "/html[1]/body[1]/div[1]/form[1]/div[3]/div[2]/div[2]/ul[1]/li[6]/h3[1]",
    "H3_CLASS_ACCORDION_SECTION_TITLE"
  );
const H3_CLASS_ACCORDION_SECTION_TITLE_1 = async () =>
  bs.query(
    "/html[1]/body[1]/div[1]/form[1]/div[3]/div[2]/div[2]/ul[5]/li[3]/h3[1]",
    "H3_CLASS_ACCORDION_SECTION_TITLE_1"
  );
const SPAN_CLASS_IMAGE_CLICKABLE = async () =>
  bs.query(
    "/html[1]/body[1]/div[1]/form[1]/div[3]/div[2]/div[2]/ul[31]/li[2]/div[1]/label[2]/span[1]",
    "SPAN_CLASS_IMAGE_CLICKABLE"
  );
const H3_CLASS_ACCORDION_SECTION_TITLE_1H4YJYYM9UTO = async () =>
  bs.query(
    "/html[1]/body[1]/div[1]/form[1]/div[3]/div[2]/div[2]/ul[1]/li[6]/h3[1]",
    "H3_CLASS_ACCORDION_SECTION_TITLE_1H4YJYYM9UTO"
  );
const H3_CLASS_ACCORDION_SECTION_TITLE_1_1H4YJYYM9UWO = async () =>
  bs.query(
    "/html[1]/body[1]/div[1]/form[1]/div[3]/div[2]/div[2]/ul[5]/li[2]/h3[1]",
    "H3_CLASS_ACCORDION_SECTION_TITLE_1_1H4YJYYM9UWO"
  );
const INPUT_CLASS_AST_RESPONSIVE_INPUT_DESKTOP_ACTIVE = async () =>
  bs.query(
    "/html[1]/body[1]/div[1]/form[1]/div[3]/div[2]/div[2]/ul[30]/li[15]/div[2]/div[1]/ul[1]/li[1]/label[1]/div[1]/input[1]",
    "INPUT_CLASS_AST_RESPONSIVE_INPUT_DESKTOP_ACTIVE"
  );
const H3_CLASS_ACCORDION_SECTION_TITLE_1H4YJYYMLUPU = async () =>
  bs.query(
    "/html[1]/body[1]/div[1]/form[1]/div[3]/div[2]/div[2]/ul[1]/li[6]/h3[1]",
    "H3_CLASS_ACCORDION_SECTION_TITLE_1H4YJYYMLUPU"
  );
const H3_CLASS_ACCORDION_SECTION_TITLE_1_1H4YJYYMLUT6 = async () =>
  bs.query(
    "/html[1]/body[1]/div[1]/form[1]/div[3]/div[2]/div[2]/ul[5]/li[2]/h3[1]",
    "H3_CLASS_ACCORDION_SECTION_TITLE_1_1H4YJYYMLUT6"
  );
const INPUT_CLASS_AST_RESPONSIVE_INPUT_DESKTOP_ACTIVE_1H4YJYYMLUWH = async () =>
  bs.query(
    "/html[1]/body[1]/div[1]/form[1]/div[3]/div[2]/div[2]/ul[30]/li[15]/div[2]/div[1]/ul[1]/li[1]/label[1]/div[1]/input[1]",
    "INPUT_CLASS_AST_RESPONSIVE_INPUT_DESKTOP_ACTIVE_1H4YJYYMLUWH"
  );

describe("Primary Header", async () => {
  beforeAll(async () => {
    await bs.setup();
  });

  afterAll(async () => {
    await bs.teardown();
  });

  describe("Login User", async () => {
    test("WordPress Login", async () => {
      let result, assert;

      // Defining browser viewport
      await bs.page.setViewport({
        width: 1680,
        height: 908,
        deviceScaleFactor: 2,
        isMobile: false,
        hasTouch: false,
        isLandscape: false
      });

      // Navigating to ${ process.env.ASTRA_TESTS_URL }/wp-login.php
      await bs.page.goto(`${ process.env.ASTRA_TESTS_URL }/wp-login.php`, {
        timeout: 30000,
        waitUntil: "networkidle0"
      });

      // Emulating user input
      await (await INPUT_ID_USER_LOGIN()).type("admin");

      // Emulating user input
      await (await INPUT_ID_USER_PASS()).type("password");

      // Emulate key press

      await bs.page.keyboard.press("Enter");

      // Waiting for an element matching body.js
      await bs.page.waitForSelector("body.js", {
        timeout: 30000,
        visible: false,
        hidden: false
      });
    });
  });

  describe("Header Layouts", async () => {
    test("Recorded test case", async () => {
      let result, assert;

      // Defining browser viewport
      await bs.page.setViewport({
        width: 1680,
        height: 908,
        deviceScaleFactor: 2,
        isMobile: false,
        hasTouch: false,
        isLandscape: false
      });

      // Navigating to ${ process.env.ASTRA_TESTS_URL }/wp-admin/customize.php
      await bs.page.goto(`${ process.env.ASTRA_TESTS_URL }/wp-admin/customize.php`, {
        timeout: 30000,
        waitUntil: "networkidle0"
      });

      // Emulating mouse click
      await (await H3_CLASS_ACCORDION_SECTION_TITLE()).click({
        button: "left"
      });

      // Emulating mouse click
      await (await H3_CLASS_ACCORDION_SECTION_TITLE_1()).click({
        button: "left"
      });

      // Emulating mouse click
      await (await SPAN_CLASS_IMAGE_CLICKABLE()).click({ button: "left" });

      // Waiting for 2000 ms
      await bs.page.waitFor(2000);

      // Emulating mouse click
      await (await CUSTOMIZE_SAVE()).click({
        button: "left",
        clickCount: 1,
        delay: 0
      });

      // Waiting for 1000 ms
      await bs.page.waitFor(400);

    });
  });

  describe("Site Title", async () => {
    test("Set Site Title", async () => {
      let result, assert;

      // Defining browser viewport
      await bs.page.setViewport({ height: 908, width: 1680 });

      // Navigating to ${ process.env.ASTRA_TESTS_URL }/wp-admin/customize.php
      await bs.page.goto(`${ process.env.ASTRA_TESTS_URL }/wp-admin/customize.php`, {
        timeout: 30000,
        waitUntil: "networkidle0"
      });

      // Emulating mouse click
      await (await CP_HEADER()).click({
        button: "left",
        clickCount: 1,
        delay: 0
      });

      // Emulating mouse click
      await (await CS_SITE_TITLE()).click({
        button: "left",
        clickCount: 1,
        delay: 0
      });

      // Waiting for 400 ms
      await bs.page.waitFor(400);

      // Emulating mouse click
      await (await SITE_TITLE_POP_TYP()).click({
        button: "left",
        clickCount: 1,
        delay: 0
      });

      // Reset the input or form
      await bs.page.$eval(
        "#customize-control-astra-settings-site-title-typography .ast-responsive-input.desktop",
        el => {
          if (el.tagName === "FORM") {
            el.reset();
            return;
          }
          if ("value" in el) {
            el.value = "";
          }
        }
      );

      // Emulating user input
      await (await SITE_TITLE_FONT_SIZE_DESKTOP()).type("52");

      // Waiting for 400 ms
      await bs.page.waitFor(400);

      // Emulating mouse click
      await (await CUSTOMIZE_SAVE()).click({
        button: "left",
        clickCount: 1,
        delay: 0
      });

      // Waiting for 1000 ms
      await bs.page.waitFor(400);

    });

    test("Test Site Title", async () => {
      let result, assert;

      // Defining browser viewport
      await bs.page.setViewport({
        width: 1680,
        height: 908,
        deviceScaleFactor: 2,
        isMobile: false,
        hasTouch: false,
        isLandscape: false
      });

      // Navigating to ${ process.env.ASTRA_TESTS_URL }/
      await bs.page.goto(`${ process.env.ASTRA_TESTS_URL }/`, {
        timeout: 30000,
        waitUntil: "networkidle0"
      });

      // Asserting that "font-size" CSS property's value of SITE_TITLE satisfies the given constraint
      result = await bs.page.$eval(
        ".site-title",
        (el, prop, pseudoEl) =>
          window.getComputedStyle(el, pseudoEl || null).getPropertyValue(prop),
        "font-size",
        "undefined"
      );
      expect(result).toBeEqual("52px", "SITE_TITLE.assertStyle");
    });
  });
});
