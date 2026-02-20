document.addEventListener("DOMContentLoaded", function () {



    // --- 1. IMPLEMENTAÇÃO DO HEADER ---
    const headerElement = document.querySelector("#header-placeholder");
    if (headerElement) {
        headerElement.innerHTML = `
        <nav class="navbar navbar-expand-lg fixed-top border-bottom bg-white py-2 shadow-sm" style="height: 80px;">
            <div class="container bg-white">
                <a class="navbar-brand d-flex align-items-center gap-2" href="/index.html">
                    <img src="./assets/images/logo.png" class="img-logo" alt="Focus Service" style="height: 50px;">
                    <div class="d-flex flex-column justify-content-center">
                        <span class="logo-text fw-bold lh-1" style="font-family: 'Bebas Neue'; font-size: 1.5rem; letter-spacing: 1px;">FOCUS SERVICE</span>
                        <span class="text-muted" style="font-size: 10px; text-transform: uppercase;">Nosso foco é você.</span>
                    </div>
                </a>

                <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </button>

                <div id="navbarNav" class="collapse navbar-collapse justify-content-end">
                    <ul class="navbar-nav text-center fw-semibold align-items-center">
                        <li class="nav-item"><a class="nav-link px-3" href="./index.html"><i class="bi bi-house-door fs-6"></i>HOME</a></li>
                        <li class="nav-item"><a class="nav-link px-3" href="./servicos/todos-servicos.html">SERVIÇOS</a></li>
                        <li class="nav-item"><a class="nav-link px-3" href="./focus/empresa.html">EMPRESA</a></li>
                        <li class="nav-item"><a class="nav-link px-3" href="./focus/trabalhe-conosco.html">TRABALHE CONOSCO</a></li>
                        <li class="nav-item"><a class="nav-link px-3" href="./focus/contato.html">CONTATO</a></li>
                       
                    </ul>
                </div>
            </div>
        </nav>
        `;
    }


    // --- 3. SEÇÃO DE CONTATO REUTILIZÁVEL ---
    const contatoSection = document.querySelector("#contato-placeholder");
    if (contatoSection) {
        contatoSection.innerHTML = `
       <section class="container-contato py-5  bg-white border-top">

        <div class="container py-lg-5">

            <div class="row g-5 align-items-center">

                <div class="col-lg-6">
                    <h6 class="text-uppercase fw-bold text-primary mb-3" style="letter-spacing: 2px;">Contato</h6>
                    <h2 class="display-5 fw-bold mb-4" style="color: var(--main-color);">Vamos conversar sobre o seu
                        condomínio?</h2>

                    <p class="text-muted mb-5 lead">Estamos prontos para oferecer a dedicação e transparência que
                        sua gestão precisa.</p>


                </div>

                <div class="col-lg-6">

                    <div class="contact-box p-4 p-md-5 rounded-4 shadow-sm border">

                        <!-- Button -->
                        <a href="https://wa.me/555181823676"
                            class="btn btn-primary btn-whatsapp-premium w-100 mb-4 d-flex align-items-center justify-content-center gap-3">
                            <i class="bi bi-whatsapp fs-4"></i>
                            <span class="fw-bold">Falar com Consultor Agora</span>
                        </a>

                        <!-- Email -->
                        <div class="contact-info-item d-flex align-items-start gap-3 mb-4">
                            <div class="icon-circle ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-envelope d-block" viewBox="0 0 16 16">
                                    <path
                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                </svg>
                            </div>
                            <div class="d-flex flex-column">
                                <span class="small">E-mail</span>
                                <span class="fw-bold">www.focus-rs.com.br</span>
                            </div>
                        </div>

                        <!-- Number -->
                        <div class="contact-info-item d-flex align-items-start gap-3">
                            <div class="icon-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-telephone d-block" viewBox="0 0 16 16">
                                    <path
                                        d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                            </div>
                            <div>
                                <span class="d-block text-muted small">Telefone / WhatsApp</span>
                                <span class="fw-bold "> <a href="https://wa.me/555181823676" class=""
                                        style="color: var(--gray-color);">51 981823676</a></span>
                            </div>
                        </div>

                        <h5 class="fw-semibold mb-3 mt-5">Siga-nos nas redes!</h5>


                        <!-- Social media button links -->
                        <div class="d-flex gap-3 mb-4 mb-lg-0">


                            <!-- Instagram icon link -->
                            <a href="https://www.instagram.com/invites/contact/?i=1gwwmmm8k9l1z&utm_content=pqi2lcg"
                                class="social-icon border contact-info-item " title="Instagram" target="_blank"
                                rel="noopener noreferrer">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E1306C"
                                    class="bi bi-instagram" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                </svg>
                            </a>

                            <!-- Face icon link -->
                            <a href="https://www.facebook.com/focusrsservice?mibextid=ZbWKwL" class="social-icon"
                                title="Instagram" target="_blank" rel="noopener noreferrer">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1877F2"
                                    class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                            </a>
                            


                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
    `;
    }




    // --- 2. IMPLEMENTAÇÃO DO FOOTER ---
    const footerElement = document.querySelector("#footer-placeholder");
    if (footerElement) {
        footerElement.innerHTML = `
        <footer class="bg-black text-light pt-5 pb-3">
            <div class="container-xl">
                <div class="row gy-4 d-flex justify-content-center">
                    <div class="col-lg-4 text-center text-lg-start">
                        <a class="d-flex align-items-center justify-content-center justify-content-lg-start text-decoration-none mb-3" href="/index.html">
                            <img src="/assets/images/logo.png" alt="Logo" style="height: 40px;" class="me-2">
                            <h4 class="logo-text m-0 text-white fw-bold" style="letter-spacing: 1px;">FOCUS SERVICE</h4>
                        </a>
                        <p class="small pe-lg-4">Soluções inteligentes em serviços e gestão para condomínios e empresas. Excelência, confiança e resultados tangíveis.</p>
                        <p class="small mt-2 text-danger">CNPJ: 00.000.000/0000-00</p>
                    </div>

                    <div class="col-6 col-lg-2 offset-lg-1" style="width: 150px;">
                        <h6 class="fw-bold mb-3 text-white">Navegação</h6>
                        <ul class="list-unstyled footer-links">
                            <li><a href="./index.html" class="text-white text-decoration-none">Início</a></li>
                            <li><a href="./focus/empresa.html" class="text-white text-decoration-none">Empresa</a></li>
                            <li><a href="./servicos/todos-servicos.html" class="text-white text-decoration-none">Serviços</a></li>
                            <li><a href="./focus/contato.html" class="text-white text-decoration-none">Contato</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-lg-2" style="width: 150px;">
                        <h6 class="fw-bold mb-3">Suporte</h6>
                        <ul class="list-unstyled footer-links">
                            <li><a href="./focus/duvidas.html" class="text-light text-decoration-none">Dúvidas</a></li>
                            <li><a href="./focus/privacidade.html" class="text-light text-decoration-none">Privacidade</a></li>
                            <li><a href="./focus/termos.html" class="text-light text-decoration-none">Termos</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 text-center text-lg-start">
                        <h6 class="fw-bold mb-3 text-white">Redes Sociais</h6>
                        <div class="d-flex gap-3 justify-content-center justify-content-lg-start mt-3">
                            <a href="https://www.instagram.com/invites/contact/?i=1gwwmmm8k9l1z&utm_content=pqi2lcg" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/focusrsservice?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <hr class="my-4 opacity-10">
                <div class="text-center">
                    <p class="mb-0 text-white opacity-50" style="font-size: 0.85rem;">&copy; 2022 Focus Service | Portaria e Limpeza</p>
                </div>
            </div>
        </footer>
        `;
    }
});