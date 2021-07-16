<template>
  <div class="presentation">
    <p>
      Orientação para retirada de comentário: clicar com o botão direito do
      mouse em cima do comentário e excluí-lo. Orientação para mudança
      automática de páginas: clique sobre o número de página que aparece na
      primeira folha numerada. Na aba Design, selecione o botão Número de
      páginas e logo após Formatar número de página. Conte as páginas
      pré-textuais e dentro da caixa, marque a opção Iniciar em e adicione a
      quantidade de páginas correspondente
    </p>
    <img src="@/assets/img/presentation.svg" alt="Apresentação do iBook" />
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>
