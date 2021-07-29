const icons = document.querySelector('.icons');

window.addEventListener('load', () => {
    icons.style.transform = 'scale(1)';
});

if (window.innerWidth > 1024) {

    const truck = document.getElementById('truck');
    const cardFrete = document.getElementById('card-frete');
    let truckAnimationState = false;

    function truckAnimation() {

        if (truckAnimationState == false) {
            truckAnimationState = true

            truck.style.transform = "translateX(40px)"
            setTimeout(() => {
                truck.style.transition = 'initial'
                truck.style.transform = "translateX(-40px)"
            }, 500)

            setTimeout(() => {
                truck.style.transition = 'all 0.5s ease'
                truck.style.transform = "translateX(0)"
            }, 550)

            setTimeout(() => {
                truckAnimationState = false
            }, 1100)
        }
    }

    cardFrete.addEventListener('mouseover', () => {
        truckAnimation()
    })



    const cardCashback = document.getElementById('card-cashback');
    const cashback = document.getElementById('cashback')
    let cashbackAnimationState = false;

    function cashbackAnimation() {

        if (cashbackAnimationState == false) {
            cashbackAnimationState = true

            cashback.style.transform = "rotate(360deg)"

            setTimeout(() => {
                cashback.style.transition = 'initial'
                cashback.style.transform = "rotate(0deg)"
            }, 1000)

            setTimeout(() => {
                cashback.style.transition = 'all 1s ease'
                cashbackAnimationState = false
            }, 1050)
        }
    }

    cardCashback.addEventListener('mouseover', () => {
        cashbackAnimation()
    })


    const cardDiscount = document.getElementById('card-discount');
    const percent = document.getElementById('percent')
    let discountAnimationState = false;

    function discountAnimation() {
        if (discountAnimationState == false) {
            discountAnimationState = true
            percent.style.transform = "scale(1.2)"

            setTimeout(() => {
                percent.style.transform = "scale(1)"
            }, 500)

            setTimeout(() => {
                discountAnimationState = false
            }, 1050)
        }
    }

    cardDiscount.addEventListener('mouseover', () => {
        discountAnimation()
    })



    const cardFriend = document.getElementById('card-friend');
    const center = document.getElementById('center')
    let friendAnimationState = false;

    function friendAnimation() {
        if (friendAnimationState == false) {
            friendAnimationState = true
            center.style.transform = "scale(1.2)"

            setTimeout(() => {
                center.style.transform = "scale(1)"
            }, 500)

            setTimeout(() => {
                friendAnimationState = false
            }, 1050)
        }
    }

    cardFriend.addEventListener('mouseover', () => {
        friendAnimation()
    })


    //Scroll Trigger

    const rules = document.querySelector('.rules')
    const money = document.getElementById('money')
    const friend = document.getElementById('friend')

    window.addEventListener('scroll', () => {

        if ((rules.offsetTop / 100) * 80 <= window.pageYOffset) {
            money.style.transform = 'translateX(0) rotate(-15deg)'
            money.style.opacity = '1'

            friend.style.transform = 'translateX(0)  rotate(-15deg) '
            friend.style.opacity = '1'
        }

        if ((rules.offsetTop / 100) * 85 <= window.pageYOffset) {
            showBadges()
        }
    });


    const boxes = rules.querySelectorAll('.box')

    function showBadges() {
        boxes.forEach((box, index) => {
            setTimeout(() => {
                let p = box.querySelector('p');
                let img = box.querySelector('img')

                p.style.transform = "translateY(0)"
                img.style.transform = "translateY(0)"
            }, index * 500)
        })
    }
}