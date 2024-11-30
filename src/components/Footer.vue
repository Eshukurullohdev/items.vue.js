<script setup>
</script>
<template>
    <div class="footer">
        <div class="footer_top container">
            <div class="footer_about">
                <h2>about us</h2>
                <hr>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem distinctio voluptatibus quia, odit dicta
                    amet praesentium aspernatur iste accusantium! Totam, distinctio.</p>
            </div>
            <div class="footer_about">
                <h2>Get in Touch</h2>
                <hr>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>se092798@gmail.com</p>
                <p>+998331443626</p>
            </div>
            <div class="footer_about footer_pages">
                <h2>Pages</h2>
                <hr>
                <ul>
                    <li><a href="#">
                            <i class="fa-solid fa-chevron-right"></i>
                            Abaut
                        </a></li>
                    <li><a href="#">
                            <i class="fa-solid fa-chevron-right"></i>
                            SHopping
                        </a></li>
                    <li><a href="#">
                            <i class="fa-solid fa-chevron-right"></i>
                            News
                        </a></li>
                    <li><a href="#">
                            <i class="fa-solid fa-chevron-right"></i>
                            Contact
                        </a></li>
                    <li><a href="#">
                            <i class="fa-solid fa-chevron-right"></i>
                            Home
                        </a></li>
                </ul>
            </div>
            <div class="footer_about">
                <h2>Subscribe</h2>
                <hr>
                <p>subscribe to our mailing to get latest</p>
                <div>
                    <input type="text" placeholder="Email">
                    <i class="fa-solid fa-paper-plane"></i>
                </div>
            </div>
        </div>
        <hr class="footer_line">
        <div class="footer_bottom container">
            <p>Copyrights &copy; 2019 - <a href="#">Ergashev SHukurullo</a>, All rights reserved</p>
            <div>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-dribbble"></i>
            </div>
        </div>
    </div>
</template>
<style scoped>
.footer {
    width: 100%;
    height: 610px;
    background-color: #051922;
    font-family: sans-serif;
}

.footer_top {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 150px;
}

.footer_about {
    width: 310px;
    color: #fff;
    margin-right: 20px;
}

.footer_about h2 {
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 20px;
    line-height: 3.25rem;
}

.footer_about hr {
    width: 30px;
    height: 2px;
    border: none;
    background-color: orange;
    margin-bottom: 20px;
}

.footer_about p {
    opacity: 0.7;
    line-height: 1.8;
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0.1px;
}

.footer_pages {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
}

.footer_pages ul li {
    list-style: none;
    margin-bottom: 20px;
}

.footer_pages ul {
    padding: 0;
}

.footer_pages ul a {
    text-decoration: none;
    color: #fff;
    line-height: 1.8;
    font-weight: 400;
    letter-spacing: 0.1px;
    opacity: 0.7;
}

.footer_pages ul i {
    padding-right: 10px;
    color: #f28123;
    font-size: 0.7rem;
}

.footer_pages ul a:hover {
    color: #f28123;
}

.footer_about input {
    border: none;
    background-color: #012738;
    width: 78%;
    padding: 15px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    color: #fff;
    margin-top: 10px
}

.footer_about div i {
    color: #f28123;
    background-color: #012738;
    transition: 0.3s all ease;
    width: 15%;
    height: 46px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    font-size: 14px;
    cursor: pointer;
    margin-top: 10px
}

.footer_about div i:hover {
    background-color: #f28123;
    color: #012738;
}

.footer_about div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.footer_bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer_bottom p {
    color: #fff;
    padding: 16px 0;
    font-size: 15px;
    opacity: 0.7;
    margin: 0;
}

.footer_bottom a {
    text-decoration: none;
    color: #f28123;
    font-weight: bold;
    display: inline-block;
}

.footer_bottom div {
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer_bottom div i {
    color: #fff;
    cursor: pointer;
    opacity: 0.7;
}

.footer_line {
    border: none;
    background-color: #fff;
    width: 100%;
    height: 0.5px;
    opacity: 0.1;
    margin-bottom: 10px;
    margin-top: 60px;
}
</style>