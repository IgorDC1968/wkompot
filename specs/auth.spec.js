describe('Auth', function () {
   it('Successful log in', async function () {
       await browser.url('/user/login');
       await expect($('.login-form-button'))
           .toBeDisabled();
       await $('[qa-id="email"]')
           .setValue('ip01081968@gmail.com');
       await $('[qa-id="password"]')
           .setValue('987654321Qq');
       await expect($('.login-form-button'))
           .toBeEnabled();
       await $('.login-form-button')
           .click();
       await expect($('img[alt="avatarIcon"]'))
           .toBeDisplayed();
   })
});