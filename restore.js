const readlineSync = require('readline-sync');
const puppeteer = require('puppeteer-extra');
var random_name = require('node-random-name');
const fs = require('fs');
const delay = require('delay');
const S = require('string');
const { error, Console } = require('console');
const { type } = require('os');
var no = 0;
var moment = require("moment");
var figlet = require('figlet');
var chalk = require('chalk');

(async () => {

    console.log(
        chalk.redBright(
            figlet.textSync('REPLACE    AKUN', { horizontalLayout: 'fitted' })
        )
    );
    console.log(
        figlet.textSync('     &  RESTORE    PLAYLIST', { horizontalLayout: 'fitted' })
    );
    console.log(
        chalk.greenBright(
            figlet.textSync('SPOTIFY     ', { horizontalLayout: 'fitted' })
        )
    );
    console.log("Source By. Alrico R")
    console.log('\n')
    var oldemail = readlineSync.question(chalk.whiteBright('[+] Input email lama           : '));
    var oldpass = readlineSync.question(chalk.whiteBright('[+] Input akun pass lama       : '));
    var newemail = readlineSync.question(chalk.whiteBright('[+] Input email akun baru      : '));
    var newpass = readlineSync.question(chalk.whiteBright('[+] Input akun pass baru       : '));
    var i = 0
    var o = 0
    while (i < 1) {

        no++
        i++
        var nama1 = random_name({
            first: true
        });
        var nama2 = random_name({
            last: true
        });
        var angka1 = Math.floor(Math.random() * 100) + 100
        var angka2 = Math.floor(Math.random() * 100) + 25
        const userAgentList = [
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/' + angka1 + '.36 (KHTML, like Gecko) Chrome/' + angka2 + '.0.4577.' + angka2 + ' Safari/' + angka1 + '.36',
            'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/' + angka1 + '.1.' + angka2 + ' (KHTML, like Gecko) Version/14.0.3 Mobile/15E' + angka1 + ' Safari/' + angka1 + '.1',

            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/' + angka1 + '.' + angka2 + ' (KHTML, like Gecko) Chrome/' + angka2 + '.0.4280.' + angka1 + ' Safari/' + angka1 + '.' + angka2 + ' Edg/' + angka2 + '.0.' + angka1 + '.75',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/' + angka1 + '.' + angka2 + ' (KHTML, like Gecko) Chrome/' + angka2 + '.0.3538.' + angka1 + ' Safari/' + angka1 + '.' + angka2 + ' Edge/' + angka2 + '.18363',
        ]
        var hasil1 = Math.floor(Math.random() * 100) + 21;
        const randomUserAgent = userAgentList[Math.floor(Math.random() * userAgentList.length)];
        const $options = {
            headers: {
                "user-agent": randomUserAgent,
            },
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--single-process', // <- this one doesn't works in Windows
                '--disable-gpu'
            ],
            waitUntil: 'networkidle2'
        };
        const browser = await puppeteer.launch({
            executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
            headless: true,
            devtools: false,
        })
        const page = await browser.newPage();
        console.log('\n')
        console.log('[' + no + ']' + " Proses Replace Akun " + oldemail)
        await page.goto("https://www.spotify.com/us/account/profile/", $options);
        await page.waitForSelector("input[type=text");
        const emailField = await page.$('input[type=text]')
        await emailField.type(oldemail)
        await emailField.dispose()
        await page.waitForSelector("input[type=password]");
        const passwordFieldn = await page.$('input[type=password]')
        await passwordFieldn.type("passwordku")
        await passwordFieldn.dispose()
        await page.waitForSelector("button[id=login-button]");
        const buttonFieldn = await page.$('button[id=login-button]')
        await buttonFieldn.click()
        await buttonFieldn.dispose()
        await page.goto("https://www.spotify.com/us/account/profile/", $options);

        await page.waitForSelector("input[type=password]");
        const passwordField = await page.$('input[type=password]')
        await passwordField.type(oldpass)
        await passwordField.dispose()
        await page.waitForSelector("button[id=login-button]");
        const buttonField = await page.$('button[id=login-button]')
        await buttonField.click()
        await buttonField.dispose()
        await delay(5000)
        console.log('[' + '=' + ']' + ' Proses Change Email')

        await page.waitForSelector("#email", { visible: true, timeout: 15000 });
        const street1 = await page.$('#email')
        await street1.type(" ")
        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');

        await page.keyboard.press('Backspace');
        await delay(5000)
        await street1.type(nama2 + hasil1 + nama1 + '@mohondihapusemailnyagantiyangbaru.id')
        await street1.dispose()

        try {
            await page.waitForSelector("#password", { visible: true, timeout: 15000 });
            const pass = await page.$('#password')
            await pass.type(oldpass)
            await page.keyboard.press('Enter')
            console.log(chalk.redBright("=============================================="))
            console.log(chalk.redBright('[' + '=' + ']' + ' CHANGE EMAIL BERHASIL'))
            console.log(chalk.redBright('[' + '?' + ']' + ' EMAIL : ' + nama2 + hasil1 + nama1 + '@mohondihapusemailnyagantiyangbaru.id'))
            console.log(chalk.redBright('[' + '?' + ']' + ' PASS  : ' + oldpass))
            console.log(chalk.redBright("=============================================="))
            await delay(3000)
        } catch (err) {
            await page.keyboard.press('Enter')
            await delay(5000)
            console.log(chalk.redBright("=============================================="))
            console.log(chalk.redBright('[' + '=' + ']' + ' CHANGE EMAIL BERHASIL'))
            console.log(chalk.redBright('[' + '?' + ']' + ' EMAIL : ' + nama2 + hasil1 + nama1 + '@mohondihapusemailnyagantiyangbaru.id'))
            console.log(chalk.redBright('[' + '?' + ']' + ' PASS  : ' + oldpass))
            console.log(chalk.redBright("=============================================="))
            await delay(5000)
        }
        await page.keyboard.press('Enter')

        await page.goto("http://www.trikatuka.aknakn.eu/", $options);
        await delay(5000)

        // //OLD SPOTIFY
        console.log('[+]' + ' Proses login akun lama... ')
        await page.waitForSelector('#app > div.uk-container.uk-container-center > div.uk-margin-top > div > div:nth-child(1) > div > span:nth-child(2) > a')
        const signold = await page.$('#app > div.uk-container.uk-container-center > div.uk-margin-top > div > div:nth-child(1) > div > span:nth-child(2) > a')
        await signold.click()
        await delay(5000)
        const pageTarget = page.target()
        const newTarget = await browser.waitForTarget(
            (target) => target.opener() === pageTarget
        )
        const newPage = await newTarget.page()
        await newPage.bringToFront()
        await newPage.waitForSelector("#root > div > div.sc-ieecCq.lniCUe > div > div > div:nth-child(8) > button > div.ButtonInner-sc-14ud5tc-0.Eyhro.encore-bright-accent-set > p");
        const agree = await newPage.$('#root > div > div.sc-ieecCq.lniCUe > div > div > div:nth-child(8) > button > div.ButtonInner-sc-14ud5tc-0.Eyhro.encore-bright-accent-set > p')
        await agree.click()
        await agree.dispose()
        console.log('[' + '+' + '] Berhasil Login Akun Lama ')

        // //NEW SPOTIFY
        await delay(5000)
        console.log('[-]' + ' Proses login akun baru... ' + newemail)
        await page.waitForSelector('#app > div.uk-container.uk-container-center > div.uk-margin-top > div > div:nth-child(2) > div > span:nth-child(3) > a')
        const signnew = await page.$('#app > div.uk-container.uk-container-center > div.uk-margin-top > div > div:nth-child(2) > div > span:nth-child(3) > a')
        await signnew.click()
        await delay(2000)
        const pageTargetnew = page.target()
        const newTargetnew = await browser.waitForTarget(
            (target) => target.opener() === pageTargetnew
        )
        const newPagenew = await newTargetnew.page()
        await newPagenew.bringToFront()
        await newPagenew.waitForSelector("#root > div > div.sc-ieecCq.lniCUe > div > div > div.sc-pVTFL.hqGqOL > div > a");
        const notyou = await newPagenew.$('#root > div > div.sc-ieecCq.lniCUe > div > div > div.sc-pVTFL.hqGqOL > div > a')
        await notyou.click()
        await notyou.dispose()

        await newPagenew.waitForSelector("input[type=text");
        const emailFieldnew = await newPagenew.$('input[type=text]')
        await emailFieldnew.type('')
        await newPagenew.keyboard.down('Control');
        await newPagenew.keyboard.press('A');
        await newPagenew.keyboard.up('Control');
        await newPagenew.keyboard.press('Backspace');
        await delay(3000)
        await emailFieldnew.type(newemail) //OLD EMAIL
        await emailFieldnew.dispose()

        await newPagenew.waitForSelector("input[type=password]");
        const passwordFieldnew1 = await newPagenew.$('input[type=password]')
        await passwordFieldnew1.type("passwordku")
        await passwordFieldnew1.dispose()
        await newPagenew.waitForSelector("button[id=login-button]");
        const passwordFieldnew2 = await newPagenew.$('button[id=login-button]')
        await passwordFieldnew2.click()
        await passwordFieldnew2.dispose()
        await newPagenew.reload()


        await newPagenew.waitForSelector("input[type=password]");
        const passwordFieldnew = await newPagenew.$('input[type=password]')
        await passwordFieldnew.type(newpass)
        await passwordFieldnew.dispose()
        await newPagenew.waitForSelector("button[id=login-button]");
        const buttonFieldnew = await newPagenew.$('button[id=login-button]')
        await buttonFieldnew.click()
        await buttonFieldnew.dispose()
        await delay(300)
        await newPagenew.waitForSelector("#root > div > div.sc-ieecCq.lniCUe > div > div > div:nth-child(8) > button");
        const agreenew = await newPagenew.$('#root > div > div.sc-ieecCq.lniCUe > div > div > div:nth-child(8) > button')
        await agreenew.click()
        await agreenew.dispose()
        await delay(3000)
        console.log('[' + '+' + '] Berhasil Login Akun Baru ')
        //RESTORE PLAYLIST
        try {
            console.log(chalk.greenBright("    Trying to Restore Playlist"))
            if (await page.$('#my-id > li.uk-active > div > div > div:nth-child(2) > table > tbody > tr:nth-child(2)') !== []) {
                await delay(3000)
                page.on('dialog', async dialog => {//on event listener trigger
                    console.log(dialog.type());
                    console.log(dialog.message());//get alert message

                    await dialog.accept(); //accept alert

                })
                const pl = await page.$("#my-id > li.uk-active > div > div > div.uk-width-1-1.uk-margin-small-bottom > button:nth-child(1)")
                pl.click()

            }
        } catch (err) {
            console.log("   Tidak Ada Playlist")
        }
        //TRACKS
        await delay(3000)
        try {
            console.log(chalk.greenBright("    Trying to Restore Tracks"))
            const tracks = await page.$('#app > div.uk-container.uk-container-center > div.uk-grid.ng-scope > div > ul.uk-tab > li:nth-child(2) > a')
            await tracks.click()
            await tracks.dispose()

            if (await page.$('#my-id > li.uk-active > div > div > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2)') !== []) {
                await delay(3000)
                page.on('dialog1', async dialog1 => {//on event listener trigger
                    console.log(dialog1.type());
                    console.log(dialog1.message());//get alert message
                    await dialog1.accept(); //accept alert
                })
                const track = await page.$('#my-id > li.uk-active > div > div > div.uk-width-1-1.uk-margin-small-bottom > button')
                track.click()
            }
        } catch (err) {
            console.log("    Tidak Ada Tracks")
        }
        await delay(5000)
        //ALBUMS
        try {
            console.log(chalk.greenBright("    Trying to Restore Albums"))
            const albums = await page.$('#app > div.uk-container.uk-container-center > div.uk-grid.ng-scope > div > ul.uk-tab > li:nth-child(3) > a')
            await albums.click()
            await albums.dispose()

            if (await page.$('#my-id > li.uk-active > div > div > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2)') !== []) {
                await delay(3000)
                page.on('dialog2', async dialog2 => {//on event listener trigger
                    console.log(dialog2.type());
                    console.log(dialog2.message());//get alert message
                    await dialog2.accept(); //accept alert
                })
                const album = await page.$('#my-id > li.uk-active > div > div > div.uk-width-1-1.uk-margin-small-bottom > button')
                album.click()
            }
        } catch (err) {
            console.log("    Tidak Ada Albums")
        }
        await delay(3000)

        //ARTIST
        try {
            console.log(chalk.greenBright("    Trying to Restore Artist"))
            const artists = await page.$('#app > div.uk-container.uk-container-center > div.uk-grid.ng-scope > div > ul.uk-tab > li:nth-child(4) > a')
            await artists.click()
            await artists.dispose()

            if (await page.$('#my-id > li.uk-active > div > div > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2)') !== []) {
                await delay(3000)
                page.on('dialog3', async dialog3 => {//on event listener trigger
                    console.log(dialog3.type());
                    console.log(dialog3.message());//get alert message
                    await dialog3.accept(); //accept alert
                })
                const artist = await page.$('#my-id > li.uk-active > div > div > div.uk-width-1-1.uk-margin-small-bottom > button')
                artist.click()
            }
        } catch (err) {
            console.log("    Tidak Ada Artist")
        }
        await delay(3000)
        await page.goto("https://www.spotify.com/us/account/profile/", $options);
        await delay(3000)
        await page.waitForSelector("#email", { visible: true, timeout: 15000 });
        const em = await page.$('#email')
        await em.type(" ")
        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');

        await page.keyboard.press('Backspace');
        await delay(3000)
        await em.type(oldemail)
        await em.dispose()

        try {
            await page.waitForSelector("#password", { visible: true, timeout: 15000 });
            const pass = await page.$('#password')
            await pass.type(newpass)
            await page.keyboard.press('Enter')
            console.log('[' + '=' + ']' + ' CHANGE EMAIL BERHASIL')
            await delay(3000)
        } catch (err) {
            await page.keyboard.press('Enter')
            await delay(3000)

            console.log('[' + '=' + ']' + ' CHANGE EMAIL BERHASIL')
            await delay(3000)
        }
        await page.keyboard.press('Enter')
        //CHANGE PASSWORD
        await page.goto("https://www.spotify.com/us/account/change-password/", $options);
        await delay(3000)
        console.log('[-]' + " Proses Pergantian Password ")
        await page.waitForSelector("#old_password");
        const chngepass = await page.$('#old_password')
        await chngepass.type(newpass)
        await chngepass.dispose()
        await page.waitForSelector("#new_password");
        const passchange = await page.$('#new_password')
        await passchange.type(oldpass)
        await passchange.dispose()
        await page.waitForSelector("#new_password_confirmation");
        const passchange1 = await page.$('#new_password_confirmation')
        await passchange1.type(oldpass)
        await passchange1.dispose()
        await page.keyboard.press('Enter')
        await delay(5000)
        console.log(chalk.greenBright("=============================================="))
        console.log(chalk.greenBright("Silahkan Buka APLIKASI SPOTIFY KAMU"))
        console.log(chalk.greenBright("Kemudian login pakai akun lama :"))
        console.log(chalk.greenBright("Email: " + oldemail))
        console.log(chalk.greenBright("Pass: " + oldpass))
        console.log(chalk.greenBright("=============================================="))
        // console.log("JANGAN MERUBAH PASSWORD YA")
        await page.goto("https://accounts.spotify.com/revoke_sessions/", $options);
        await delay(3000)
        await page.goto("https://accounts.spotify.com/id/login", $options);
        await page.waitForSelector("input[type=text");
        const inputemailold = await page.$('input[type=text]')
        await inputemailold.type('')
        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.press('Backspace');
        await inputemailold.type(nama2 + hasil1 + nama1 + '@mohondihapusemailnyagantiyangbaru.id')
        await page.waitForSelector("input[type=password]");
        const passwordField1 = await page.$('input[type=password]')
        await passwordField1.type(oldpass)
        await passwordField1.dispose()
        await page.waitForSelector("button[id=login-button]");
        const buttonField1 = await page.$('button[id=login-button]')
        await buttonField1.click()
        await buttonField1.dispose()
        await delay(5000)
        await page.goto("https://accounts.spotify.com/revoke_sessions/", $options);
        browser.close()
    }
})();
