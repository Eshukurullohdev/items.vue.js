<script>
</script>
<template>
    <div class="second_page">
        <div class="second_page-wrapper container">
            <div class="second_page-box">
                <i class="fa-solid fa-truck-fast"></i>
                <div>
                    <h4>free shippping </h4>
                    <p>when over $75</p>
                </div>
            </div>
            <div class="second_page-box">
                <i class="fa-solid fa-phone"></i>
                <div>
                    <h4>free 24-7 suport</h4>
                    <p>get refunt all day</p>
                </div>
            </div>
            <div class="second_page-box">
                <i class="fa-solid fa-repeat"></i>
                <div>
                    <h4>Refund</h4>
                    <p>get refunt suport</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.second_page {
    width: 100%;
    height: 225px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
}

.second_page-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.second_page-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
}

.second_page-box i {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    border: 4px dotted orange;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    cursor: pointer;
    color: orange;
    margin-right: 30px;
}

.second_page-box h4 {
    line-height: 22px;
    font-size: 18px;
    margin-bottom: 4px;
    font-weight: 700;
    font-family: sans-serif;
}

.second_page-box p {
    opacity: 0.75;
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0.1px;
    line-height: 1.8;
    columns: #051922;
    margin: 0;
}
</style>