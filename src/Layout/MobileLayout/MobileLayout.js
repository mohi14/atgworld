import React from 'react';
import './MobileLayout.css'

const MobileLayout = () => {
    return (
        <div className='d-block d-md-none '>
            <div className='d-flex align-items-center justify-content-between mt-3 container'>
                <p className='mt-2 fw-semibold'>Posts(368)</p>
                <div className='btn btn-light fw-semibold'>Filter: All <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg" className='ms-3'>
                    <path d="M0.833252 0.333374L4.99992 4.50004L9.16659 0.333374H0.833252Z" fill="#212529" />
                </svg>
                </div>
            </div>
            <div class="row row-cols-1 g-3 my-1">
                <div class="col p-0 shadow border-0 ">
                    <div class="card position-static">
                        <img src={require('../../Assets/article.png')} class="card-img-top" alt="..." />
                        <div class="card-body m-3">
                            <h6>✍️ Article</h6>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h5 class="card-title mt-3 fw-semibold">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                                <div>
                                    <button className='btn dropdown-toggle  ' data-bs-toggle="dropdown" aria-expanded="false">  <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z" fill="black" />
                                    </svg></button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                        <li><a class="dropdown-item" href="#">Report</a></li>
                                        <li><a class="dropdown-item" href="#">Option 3</a></li>
                                    </ul>
                                </div>
                            </div>
                            <p class="card-text text-secondary">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <img src={require('../../Assets/profile1.png')} alt="" />
                                    <div>
                                        <p className='fw-semibold fs-5  ms-3 mb-0 '>Sarthak Kamra</p>
                                        <img src={require('../../Assets/views.png')} alt="" className='ms-3' />
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>

                                    <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="42" height="36" rx="2" fill="#EDEEF0" />
                                        <g clip-path="url(#clip0_1_976)">
                                            <path d="M25.5 21.06C24.93 21.06 24.42 21.285 24.03 21.6375L18.6825 18.525C18.72 18.3525 18.75 18.18 18.75 18C18.75 17.82 18.72 17.6475 18.6825 17.475L23.97 14.3925C24.375 14.7675 24.9075 15 25.5 15C26.745 15 27.75 13.995 27.75 12.75C27.75 11.505 26.745 10.5 25.5 10.5C24.255 10.5 23.25 11.505 23.25 12.75C23.25 12.93 23.28 13.1025 23.3175 13.275L18.03 16.3575C17.625 15.9825 17.0925 15.75 16.5 15.75C15.255 15.75 14.25 16.755 14.25 18C14.25 19.245 15.255 20.25 16.5 20.25C17.0925 20.25 17.625 20.0175 18.03 19.6425L23.37 22.7625C23.3325 22.92 23.31 23.085 23.31 23.25C23.31 24.4575 24.2925 25.44 25.5 25.44C26.7075 25.44 27.69 24.4575 27.69 23.25C27.69 22.0425 26.7075 21.06 25.5 21.06Z" fill="#2D2D2D" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_976">
                                                <rect width="18" height="18" fill="white" transform="translate(12 9)" />
                                            </clipPath>
                                        </defs>
                                    </svg>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" className='position-fixed bottom-0 end-fixed'>
                    <g filter="url(#filter0_dd_1_266)">
                        <circle cx="31" cy="29" r="27" fill="url(#paint0_linear_1_266)" />
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36.6588 20C36.4088 20 36.1488 20.1 35.9588 20.29L34.1288 22.12L37.8788 25.87L39.7088 24.04C40.0988 23.65 40.0988 23.02 39.7088 22.63L37.3688 20.29C37.1688 20.09 36.9188 20 36.6588 20ZM33.0588 26.02L33.9788 26.94L24.9188 36H23.9988V35.08L33.0588 26.02ZM21.9988 34.25L33.0588 23.19L36.8088 26.94L25.7488 38H21.9988V34.25Z" fill="white" />
                    <defs>
                        <filter id="filter0_dd_1_266" x="0" y="0" width="62" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_266" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="2" />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow_1_266" result="effect2_dropShadow_1_266" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_266" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_1_266" x1="31" y1="2" x2="31" y2="56" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF5C5C" />
                            <stop offset="1" stop-color="#F0568A" />
                        </linearGradient>
                    </defs>
                </svg>


                <div class="col p-0 shadow border-0">
                    <div class="card position-static">
                        <img src={require('../../Assets/Education.png')} alt="..." />
                        <div class="card-body m-3">
                            <h6>🔬️ Education</h6>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h4 class="card-title mt-3">Tax Benefits for Investment under National Pension Scheme launched by Government</h4>
                                <div>
                                    <button className='btn dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">  <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z" fill="black" />
                                    </svg></button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                        <li><a class="dropdown-item" href="#">Report</a></li>
                                        <li><a class="dropdown-item" href="#">Option 3</a></li>
                                    </ul>

                                </div>
                            </div>
                            <p class="card-text text-secondary">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <img src={require('../../Assets/profile2.png')} alt="" />
                                    <div>
                                        <p className='fw-semibold fs-5  ms-3 mb-0 '>Sarah West</p>
                                        <img src={require('../../Assets/views.png')} alt="" className='ms-3' />
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="42" height="36" rx="2" fill="#EDEEF0" />
                                        <g clip-path="url(#clip0_1_976)">
                                            <path d="M25.5 21.06C24.93 21.06 24.42 21.285 24.03 21.6375L18.6825 18.525C18.72 18.3525 18.75 18.18 18.75 18C18.75 17.82 18.72 17.6475 18.6825 17.475L23.97 14.3925C24.375 14.7675 24.9075 15 25.5 15C26.745 15 27.75 13.995 27.75 12.75C27.75 11.505 26.745 10.5 25.5 10.5C24.255 10.5 23.25 11.505 23.25 12.75C23.25 12.93 23.28 13.1025 23.3175 13.275L18.03 16.3575C17.625 15.9825 17.0925 15.75 16.5 15.75C15.255 15.75 14.25 16.755 14.25 18C14.25 19.245 15.255 20.25 16.5 20.25C17.0925 20.25 17.625 20.0175 18.03 19.6425L23.37 22.7625C23.3325 22.92 23.31 23.085 23.31 23.25C23.31 24.4575 24.2925 25.44 25.5 25.44C26.7075 25.44 27.69 24.4575 27.69 23.25C27.69 22.0425 26.7075 21.06 25.5 21.06Z" fill="#2D2D2D" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_976">
                                                <rect width="18" height="18" fill="white" transform="translate(12 9)" />
                                            </clipPath>
                                        </defs>
                                    </svg>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col p-0 shadow border-0">
                    <div class="card position-static">
                        <img src={require('../../Assets/meetup.png')} alt="..." />
                        <div class="card-body m-3">
                            <h6>🗓️ Meetup</h6>
                            <h4 class="card-title mt-3">Finance & Investment Elite Social Mixer @Lujiazui</h4>
                            <div className='d-flex align-items-center fw-semibold my-3'>
                                <div className='d-flex align-items-center me-5'>
                                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.8333 2.49992H13V0.833252H11.3333V2.49992H4.66667V0.833252H3V2.49992H2.16667C1.24167 2.49992 0.508333 3.24992 0.508333 4.16659L0.5 15.8333C0.5 16.7499 1.24167 17.4999 2.16667 17.4999H13.8333C14.75 17.4999 15.5 16.7499 15.5 15.8333V4.16659C15.5 3.24992 14.75 2.49992 13.8333 2.49992ZM13.8333 15.8333H2.16667V6.66658H13.8333V15.8333ZM3.83333 8.33325H8V12.4999H3.83333V8.33325Z" fill="black" />
                                    </svg>

                                    <span className='ms-2'>Fri, 12 Oct, 2018</span>
                                </div>
                                <div className='d-flex align-items-center '>
                                    <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.99996 0.666748C2.77496 0.666748 0.166626 3.27508 0.166626 6.50008C0.166626 10.8751 5.99996 17.3334 5.99996 17.3334C5.99996 17.3334 11.8333 10.8751 11.8333 6.50008C11.8333 3.27508 9.22496 0.666748 5.99996 0.666748ZM1.83329 6.50008C1.83329 4.20008 3.69996 2.33342 5.99996 2.33342C8.29996 2.33342 10.1666 4.20008 10.1666 6.50008C10.1666 8.90008 7.76663 12.4918 5.99996 14.7334C4.26663 12.5084 1.83329 8.87508 1.83329 6.50008Z" fill="black" />
                                        <path d="M5.99996 8.58341C7.15055 8.58341 8.08329 7.65067 8.08329 6.50008C8.08329 5.34949 7.15055 4.41675 5.99996 4.41675C4.84937 4.41675 3.91663 5.34949 3.91663 6.50008C3.91663 7.65067 4.84937 8.58341 5.99996 8.58341Z" fill="black" />
                                    </svg>


                                    <span className='ms-2'>Ahmedabad, India</span>
                                </div>
                            </div>

                            <button className='btn btn-outline-secondary w-100 visit-text mb-4 fw-semibold'>Visit Website</button>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <img src={require('../../Assets/profile3.png')} alt="" />
                                    <div>
                                        <p className='fw-semibold fs-5  ms-3 mb-0 '>Ronal Jones</p>
                                        <img src={require('../../Assets/views.png')} alt="" className='ms-3' />
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="42" height="36" rx="2" fill="#EDEEF0" />
                                        <g clip-path="url(#clip0_1_976)">
                                            <path d="M25.5 21.06C24.93 21.06 24.42 21.285 24.03 21.6375L18.6825 18.525C18.72 18.3525 18.75 18.18 18.75 18C18.75 17.82 18.72 17.6475 18.6825 17.475L23.97 14.3925C24.375 14.7675 24.9075 15 25.5 15C26.745 15 27.75 13.995 27.75 12.75C27.75 11.505 26.745 10.5 25.5 10.5C24.255 10.5 23.25 11.505 23.25 12.75C23.25 12.93 23.28 13.1025 23.3175 13.275L18.03 16.3575C17.625 15.9825 17.0925 15.75 16.5 15.75C15.255 15.75 14.25 16.755 14.25 18C14.25 19.245 15.255 20.25 16.5 20.25C17.0925 20.25 17.625 20.0175 18.03 19.6425L23.37 22.7625C23.3325 22.92 23.31 23.085 23.31 23.25C23.31 24.4575 24.2925 25.44 25.5 25.44C26.7075 25.44 27.69 24.4575 27.69 23.25C27.69 22.0425 26.7075 21.06 25.5 21.06Z" fill="#2D2D2D" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_976">
                                                <rect width="18" height="18" fill="white" transform="translate(12 9)" />
                                            </clipPath>
                                        </defs>
                                    </svg>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col  p-0 shadow border-0">
                    <div class="card position-static mb-5">
                        <div class="card-body m-3">
                            <h6>💼️ Job</h6>
                            <h4 class="card-title mt-3">Software Developer</h4>
                            <div className='d-flex align-items-center fw-semibold my-3'>
                                <div className='d-flex align-items-center me-5'>
                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.6667 4.00008V2.33341H7.33342V4.00008H10.6667ZM2.33341 5.66675V14.8334H15.6667V5.66675H2.33341ZM15.6667 4.00008C16.5917 4.00008 17.3334 4.74175 17.3334 5.66675V14.8334C17.3334 15.7584 16.5917 16.5001 15.6667 16.5001H2.33341C1.40841 16.5001 0.666748 15.7584 0.666748 14.8334L0.675081 5.66675C0.675081 4.74175 1.40841 4.00008 2.33341 4.00008H5.66675V2.33341C5.66675 1.40841 6.40841 0.666748 7.33342 0.666748H10.6667C11.5917 0.666748 12.3334 1.40841 12.3334 2.33341V4.00008H15.6667Z" fill="black" />
                                    </svg>



                                    <span className='ms-2'>Innovaccer Analytics Private Ltd.</span>
                                </div>
                                <div className='d-flex align-items-center '>
                                    <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.99996 0.666748C2.77496 0.666748 0.166626 3.27508 0.166626 6.50008C0.166626 10.8751 5.99996 17.3334 5.99996 17.3334C5.99996 17.3334 11.8333 10.8751 11.8333 6.50008C11.8333 3.27508 9.22496 0.666748 5.99996 0.666748ZM1.83329 6.50008C1.83329 4.20008 3.69996 2.33342 5.99996 2.33342C8.29996 2.33342 10.1666 4.20008 10.1666 6.50008C10.1666 8.90008 7.76663 12.4918 5.99996 14.7334C4.26663 12.5084 1.83329 8.87508 1.83329 6.50008Z" fill="black" />
                                        <path d="M5.99996 8.58341C7.15055 8.58341 8.08329 7.65067 8.08329 6.50008C8.08329 5.34949 7.15055 4.41675 5.99996 4.41675C4.84937 4.41675 3.91663 5.34949 3.91663 6.50008C3.91663 7.65067 4.84937 8.58341 5.99996 8.58341Z" fill="black" />
                                    </svg>


                                    <span className='ms-2'>Noida, India</span>
                                </div>
                            </div>
                            <button className='btn btn-outline-secondary w-100 visit-text mb-4 fw-semibold apply-text'>Apply on Timesjobs</button>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <img src={require('../../Assets/profile4.png')} alt="" />
                                    <div>
                                        <p className='fw-semibold fs-5  ms-3 mb-0'>Joseph Gray</p>
                                        <img src={require('../../Assets/views.png')} alt="" className='ms-3' />
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="42" height="36" rx="2" fill="#EDEEF0" />
                                        <g clip-path="url(#clip0_1_976)">
                                            <path d="M25.5 21.06C24.93 21.06 24.42 21.285 24.03 21.6375L18.6825 18.525C18.72 18.3525 18.75 18.18 18.75 18C18.75 17.82 18.72 17.6475 18.6825 17.475L23.97 14.3925C24.375 14.7675 24.9075 15 25.5 15C26.745 15 27.75 13.995 27.75 12.75C27.75 11.505 26.745 10.5 25.5 10.5C24.255 10.5 23.25 11.505 23.25 12.75C23.25 12.93 23.28 13.1025 23.3175 13.275L18.03 16.3575C17.625 15.9825 17.0925 15.75 16.5 15.75C15.255 15.75 14.25 16.755 14.25 18C14.25 19.245 15.255 20.25 16.5 20.25C17.0925 20.25 17.625 20.0175 18.03 19.6425L23.37 22.7625C23.3325 22.92 23.31 23.085 23.31 23.25C23.31 24.4575 24.2925 25.44 25.5 25.44C26.7075 25.44 27.69 24.4575 27.69 23.25C27.69 22.0425 26.7075 21.06 25.5 21.06Z" fill="#2D2D2D" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_976">
                                                <rect width="18" height="18" fill="white" transform="translate(12 9)" />
                                            </clipPath>
                                        </defs>
                                    </svg>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MobileLayout;