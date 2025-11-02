// Classe que controla o funcionamento do menu hambúrguer no celular
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        // Pega o botão do menu hambúrguer (as três linhas)
        this.mobileMenu = document.querySelector(mobileMenu);

        // Pega a lista inteira do menu (a <ul>)
        this.navList = document.querySelector(navList);

        // Pega todos os itens do menu (cada <li>)
        this.navLinks = document.querySelectorAll(navLinks);

        // Nome da classe que será usada para abrir/fechar o menu
        this.activeClass = "active";

        // Faz o "this" continuar funcionando mesmo dentro do evento de clique
        // Sem isso, o JavaScript muda o "this" e quebra o código
        this.handleClick = this.handleClick.bind(this);
    }

    // Função executada quando a pessoa clica no menu hambúrguer
    handleClick() {
        // Abre ou fecha o menu adicionando/removendo a classe "active"
        this.navList.classList.toggle(this.activeClass);

        // Chama a animação dos links
        this.animateLinks();
    }

    // Anima cada link do menu (efeito de aparecer um por um)
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            // Se o link já tiver animação, remove
            // Se não tiver, coloca uma animação com um pequeno atraso
            // O atraso faz cada link aparecer em sequência
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.2}s`);
        });
    }

    // Adiciona o evento de clique no botão do menu hambúrguer
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    // Inicia toda a lógica do menu
    init() {
        // Só roda se o botão realmente existir no site
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

// Cria o menu passando os seletores usados no HTML
const mobileNavbar = new MobileNavbar(
    ".mobile-menu", // Botão hamburguer
    ".ul-nav",      // Lista do menu
    ".ul-nav li"    // Itens do menu
);

// Inicia o menu hambúrguer
mobileNavbar.init();
