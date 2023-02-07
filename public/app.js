document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();

})

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const db = firebase.firestore();
    const testAccount = db.collection('Accounts').doc('vxHE0XlxY2FqapA6fAms');

    firebase.auth().signInWithPopup(provider)

        .then(result => {
            const user = result.user;
            document.write(`Hello ${user.displayName} <br> Here is your test Account <br>`);

            testAccount.onSnapshot(doc => {
                const data = doc.data();
                document.write( data.website + `<br>` 
                                + data.username + `<br>`
                                + data.password + `<br>`
                                + data.status + `<br>`)
            });
        })
}