<template>
    <div class="container">

        <div class="row justify-content-center sameRow1">
            
            <!--User small profile card for them to input their status and about themselves-->
            <div class="col-md-4 cardpic rounded sameHeight1">
            <div class="area1 p-3 py-5"> </div>
            <div class="area2 p- text-center px-3">
                <div class="image mr-3"> <img src="@/assets/img/community.png" class="rounded-circle" width="100" />
                    <h4 class=" name mt-3 ">Park Jin Woo</h4>
                    <p class="information mt-3 text-justify"> About Yourself: Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, optio. Commodi blanditiis deserunt architecto at quas nobis! Placeat dolor necessitatibus quis fugit ipsam tempora! Corporis ratione praesentium culpa veritatis soluta! </p>
                </div>

            </div>
            </div>


        </div><!--this ending div tag is for the first row-->


    </div> <!--this ending div tag is for the container-->

</template>



<script>
export default {
    
}
</script>



<style lang="scss" scoped>

/*this following style is for the profile card */
.cardpic {
    width: 400px;
    border: none;
    border-radius: 14px !important
}

.area1 {
    background-color: white;
    border-top-left-radius: 14px !important;
    border-top-right-radius: 14px !important;
    padding-top: 83px !important
}

.image {
    top: -62px;
    position: relative
}

.image img {
    box-shadow: 5px 6px 6px 2px #e9ecef
}

.area2 {
    background-color: #d9e4f5;
    background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px 
}

.name {
    font-size: 25px;
    font-weight: 650; 
    color: black;
}

.information {
    color: black;
    font-weight: 500;
    font-size: 16px
}




</style>