<template>
    <div class="games-page-wrapper games-page">
        <div class="games-page-banner">
                <div class="games-banner-content content">
                    <div class="content-text">
                        <div class="content-heading">
                            Refer a friends and get $10 off!
                        </div>
                        <div class="content-description">
                            Connect with friends. Refer a friend and unlock your $10 coupon! Offer ends February 27.
                        </div>
                    </div>
                    <div class="content-btn">
                        <my-button label="Invite a friend" type="base-white"/>
                    </div> 
                </div>
                <div class="games-banner-image"></div>
        </div>
        <div class="games-page-search-bar search-bar">
            <form class="search-bar-form" @submit.prevent="search">
                <div class="search-bar-text-input bar-item">
                    <text-input 
                        :label="`Search for ${pageName}`"
                        v-model:value="searchQuerry"
                        placeholder="Search"
                        icon="search"
                    />
                </div>
                <div class="search-bar-selects selects bar-item">
                    <div class="category-select select bar-item">
                        <multi-select
                            label="Category"
                            v-model:options="categories"
                            v-model:chosenOptions="chosenCategories"
                        />
                    </div>
                    <div class="sort-select select bar-item">
                        <default-select 
                            label="Sort by"
                            v-model:options="sortOptions"
                            v-model:chosenVal="chosenSortOption"
                        />
                    </div>
                </div>
                <button style="display:none" type="submit"></button>
            </form>
            <my-button class="search-bar-mobile-btn" type="base-white" label="Filters" icon="filter_list"/>
            <div class="chosen-categories">
                <chosen-options 
                    class="chosen-options"
                    v-model:chosenOptions="renderedCategories"
                    v-model:options="categories"
                />
            </div>
        </div>
        <div class="games-page-product-list">
            <div class="product-list">
                <card-adder class="product" @updateBool="showBtns = !showBtns"/>
                <product-card v-for="game in games"
                :key="game.id" class="product" 
                :product="game"
                :showBtns="showBtns"
                @add="addCard"
                @remove="removeCard"
                />
            </div>
            <div class="product-list-pagination">
                <pagination class="pagination"/>
                <my-button type="base-white" class="mobile-pagination" label="Show more"/>
            </div>
        </div>
        <div class="games-page-faq faq">
            <div class="faq-heading heading">
                <div class="heading-title">Frequently asked questions</div>
                <div class="heading-subtitle">Everything you need to know about the games.</div>
            </div>
            <div class="faq-body questions">
                <div 
                class="question"
                v-for="question in faq"
                :key="question"
                >
                    <accordion :heading="question.question">
                        <template v-slot:body>
                            <div class="questions-inner inner">
                                <div class="inner-body">{{question.body}}</div>
                                <div 
                                class="inner-list"
                                v-for="list in question.list"
                                :key="list"
                                >
                                    <ul>
                                        <li><span>{{list}}</span></li>
                                    </ul>
                                </div>
                                <div class="inner-bottom bottom">
                                    <div class="bottom-title">{{question.bottom.title}}</div>
                                    <div class="bottom-body">{{question.bottom.body}}</div>
                                </div>
                            </div>
                        </template>
                    </accordion>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import banner from '@/components/UI/pageBanner.vue'
import myButton from '@/components/UI/myButton.vue'
import textInput from '@/components/UI/textInput.vue'
import defaultSelect from '@/components/UI/defaultSelect.vue'
import multiSelect from '@/components/UI/multiSelect.vue'
import chosenOptions from '@/components/UI/chosenOptions.vue'
import productCard from '@/components/UI/productCard.vue'
import cardAdder from '@/components/UI/cardAdder.vue'
import pagination from '@/components/UI/pagination.vue'
import accordion from '../components/UI/accordion.vue'

import windowPath from '@/mixins/windowPath.js'
import { useQuasar } from 'quasar'
import db from '@/db.js'

export default {
    components: {
        banner, 
        myButton,
        textInput,
        defaultSelect,
        multiSelect, 
        chosenOptions,
        productCard,
        cardAdder,
        pagination,
        accordion
    },
    mixins: [windowPath],
    data(){
        return {
            searchQuerry: '',
            chosenSortOption: 'Grade',
            chosenCategories: ['Action', 'Shooter', 'Card Game'],
            renderedCategories: ['Action', 'Shooter', 'Card Game'],
            categories: [
                {value: 'Action RPG', isChosen: false},
                {value: 'Multiplayer RPG', isChosen: false},
                {value: 'Action', isChosen: true},
                {value: 'Shooter', isChosen: true},
                {value: 'Card Game', isChosen: true},
            ],
            sortOptions: ['Popular','Price', 'Grade'],
            showBtns: false,
            games: db.games,
            faq: db.faq,
            $q: useQuasar()
        }
    },
    methods: {
        search(){
            this.renderedCategories = this.chosenCategories
        },
        addCard(product){
            product.status = true;
            this.$store.state.cart.push(product)
            this.$q.notify({message: `${product.title} added`})
        },
        removeCard(product){
            product.status = false;
            this.$store.state.cart = this.$store.state.cart.filter(prod => prod.id !== product.id)
            this.$q.notify({message: `${product.title} removed`})
        }
    }
}
</script>

<style lang="scss" scoped>
    .games-page-banner {
        width: 100%;
        height: 408px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: $radius16;
        position: relative;
        background-image: url('../assets/img/bg.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        .games-banner-content {
            width: 40%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 312px;
            color: $base-white;
            margin-left: 60px;
                .content-heading {
                    font-weight: 600;
                    font-size: 40px;
                    line-height: 44px;
                    margin-bottom: 28px;
                }
                .content-description {
                    font-size: 16px;
                    line-height: 24px;
                    margin-bottom: 32px;
                }
                .content-btn {
                    max-width: 141px;
                }
        } 
        .games-banner-image {
            width: 60%;
            height: calc(100% + 45px);
            background-image: url('../assets/img/banner.png');
            background-size: cover;
            background-repeat: no-repeat;
            margin-top: -45px;
        }    
            
            
    }
    
    .games-page-search-bar {
        padding: 60px 0px 40px 0px;
        .search-bar-form {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;
            margin-bottom: 32px;
            .bar-item {
                width: calc(50% - 8px);
            }
            .search-bar-selects {
                display: flex;
                justify-content: space-between;
                .select {
                position: relative;
                }
            }
        }
        .search-bar-mobile-btn {
            margin-bottom: 16px;
            display: none;
        }
        .chosen-categories {
            width: 100%;
            display: flex;
            height: 40px;
            overflow-y: auto;
        }
    }

    .games-page-product-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        .product-list {
          display: grid;
          justify-content: center;
          grid-template-columns: repeat(4, 23%);
          gap: 32px;
          margin-bottom: 40px;
        }
        .mobile-pagination {
            display: none;
        }
    }

    .games-page-faq {
        padding: 80px 0px;
        .faq-heading {
            text-align: center;
            margin-bottom: 20px;
            .heading-title {
                font-size: 32px;
                font-weight: 600;
                line-height: 38px;
                margin-bottom: 20px;
            }
            .heading-subtitle {
                font-size: 16px;
                line-height: 24px;
                color: $content500;
            }
        }
        .faq-body {
            .question {
                .inner {
                   color: $content500;
                   font-size: 16px;
                    line-height: 24px;
                   padding: 24px 0px 40px 0px; 
                   .inner-body {
                       font-weight: 500;
                       margin-bottom: 20px;
                   }
                   .inner-list {
                       margin-bottom: 20px;
                       ul {
                           padding: 0;
                           margin: 0;
                           list-style-position: inside;
                           li {
                                color: $primary600;
                                margin-bottom: 6px;
                           }
                            span {
                                color: $content500;
                            }
                       }
                   }
                   .inner-bottom {
                       .bottom-title {
                           color: $content900;
                           font-weight: 500;
                           margin-bottom: 16px;
                       }
                   }
                }
            }
        }
    }

   


    @media (max-width: 1024px){
        .games-page-product-list {
          .product-list {
          grid-template-columns: repeat(3, 31%);
          }   
        }
        .games-page-banner {
            height: 384px;
            .games-banner-content {
                margin-left: 40px;
                    .content-heading {
                        font-weight: 600;
                        font-size: 32px;
                        line-height: 38px;
                    }
            } 
            .games-banner-image {
                height: 100%;
                margin-top: -0px;
            }    
        }
    }
    @media (max-width: 768px){
        .games-page-product-list {
          .product-list {
          grid-template-columns: repeat(2, 48%);
          }   
        }
        .games-page-banner {
            height: 324px;   
        }
    }
    @media (max-width: 600px){
        .games-page-banner {
            height: 448px;
            justify-content: center;
            background-image: url('../assets/img/mobile.bg.jpeg');
            padding: 32px;
            .games-banner-content {
                width: 100%;
                justify-content: space-between;
                margin-left: 0px;
                    .content-heading {
                        font-size: 24px;
                        line-height: 28px;
                    }
                    .content-btn {
                        max-width: unset;
                    }
            } 
            .games-banner-image {
                display: none;
            }
        }
        .games-page-search-bar {
            .search-bar-form {
                display: none;
            }
            .search-bar-mobile-btn {
                display: block;
            }
        }
        

        .games-page-product-list {
          .product-list {
            grid-template-columns: repeat(1, 100%);
            .product.cart-adder {
                padding: 40px;
            }
          }
          .pagination {
              display: none;
          }
          .mobile-pagination {
              display: block;
          }   
        }
        .games-page-faq {
            padding: 60px 0px;
            .faq-heading {
                text-align: left;
                margin-bottom: 20px;
                .heading-title {
                    font-size: 24px;
                    margin-bottom: 16px;
                }
            }
        }
    }
    
    
</style>