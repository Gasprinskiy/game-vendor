<template>
    <div class="footer-container ">
        <div class="footer-wrapper footer">
            <div class="footer-top newsletter">
                <div class="newsletter-text newsletter-content">
                    <div class="newsletter-title">Join our newsletter</div>
                    <div class="newsletter-subtite">We’ll send you a nice letter one per week. No spam.</div>
                </div>
                <div class="newsletter-form form newsletter-content">
                    <div class="form-input">
                        <text-input 
                            placeholder="Enter email" 
                            v-model:value="footerData.email"
                        />
                    </div>
                    <div class="form-button">
                        <my-button label="Subscribe"/>
                    </div>
                </div>
            </div>
            <q-separator class="footer-separator"/>
            <div class="footer-body links">
                <div 
                    class="links-column"
                    v-for="data in footerData.links"
                    :key="data"
                >
                    <div class="links-column-name">
                        {{data.name}}
                    </div>
                        <div 
                            class="links-colimn-link"
                            v-for="link in data.links"
                            :key="link"
                        >
                           <my-link :text="link"/>
                        </div>
                </div>
            </div>
            <div class="footer-bottom copyright">
                {{footerData.copyright}}
            </div>
        </div>
    </div>
    
</template>

<script>

import textInput from './UI/textInput.vue'
import myButton from './UI/myButton.vue'
import myLink from './UI/myLink.vue'

export default {
    components : {textInput, myButton, myLink},
    props: {
        footerData: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style lang="scss" scoped>
    .footer-container {
        padding: 64px 112px;
        background-color: $content900;
        .footer-wrapper {
            display: flex;
            flex-direction: column;
            color: $base-white;
            line-height: 24px;
            .footer-top {
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-bottom: 56px;
                .newsletter-content {
                    width: 50%;
                    display: flex;
                }
                .newsletter-text {
                    flex-direction: column;
                    .newsletter-title {
                        font-size: 18px;
                        font-weight: 600;
                        margin-bottom: 4px;
                    }
                    .newsletter-subtite {
                        font-size: 16px;
                        color: $content400;
                    }
                }
                .newsletter-form {
                    justify-content: space-between;
                    align-items: center;
                    .form-input {
                        width: calc(80% - 4px);
                    }
                    .form-button {
                        width: 20%;
                    }
                }
            }
            .footer-body {
                display: flex;
                padding: 56px 0px;
                .links-column {
                    width: 25%;
                }
                .links-column-name {
                    color: $content400;
                    font-size: 14px;
                    margin-bottom: 20px;
                    line-height: 20px;
                }
                .links-colimn-link {
                    font-size: 16px;
                    &:not(:last-child){
                        margin-bottom: 8px;
                    }
                }
            }
            .footer-bottom {
                font-size: 16px;
                color: $content500;
                padding: 32px 0px;
            }
        }
    }
    .footer-separator {
        background-color: #344054;
    }
    @media (max-width: 1024px){
        .footer-container {
            padding: 64px 24px;
        }
    }
    @media (max-width: 768px){
        .footer-container {
            .footer-wrapper {
                .footer-top {
                    flex-direction: column;
                    .newsletter-content {
                        width: 100%;
                    }
                    .newsletter-text {
                        margin-bottom: 32px;
                    }
                }
            }
        }
    }
    @media (max-width: 600px) {
        .footer-container {
            padding: 32px 20px 64px 24px;
            .footer-wrapper {
                .footer-top {
                    .newsletter-form {
                        flex-direction: column;
                        .form-input {
                            margin-bottom: 8px;
                        }
                        .form-button,
                        .form-input {
                            width: 100%;
                        }
                    }
                }
                .footer-body {
                    flex-direction: column;
                    .links-column:not(:last-child){
                        margin-bottom: 32px;
                    }
                }
            }
        }
    }
</style>