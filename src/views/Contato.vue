<template>
  <div class="container-fluid">
    <section class="background pb-5">
      <h1 class="display-3 text-center">Contato</h1>
      <section>
        <div class="container">
          <form name="contato" action="#" method="get" id="formulario" class="container">
            <div class="box">
              <h1>Deixe-nos uma mensagem:</h1>

              <label>
                <span>Nome Completo</span>
                <input type="text" class="input_text" name="nome" id="name" />
              </label>

              <label>
                <span>Email</span>
                <input type="email" class="input_text" name="email" id="email" />
              </label>

              <label>
                <span>Tipo</span>
                <select name="tipo">
                  <option value="duvida">Dúvidas</option>
                  <option value="critica">Críticas</option>
                  <option value="sugestao">Sugestões</option>
                  <option value="elogios">Elogios</option>
                </select>
              </label>

              <label>
                <span>Mensagem</span>
                <textarea class="message" name="feedback" id="feedback"></textarea>
              </label><br>
              <input type="submit" class="btn btn-dark" value="Enviar" /><br>
            </div>
          </form>
        </div>
      </section>
    </section>
  </div>
</template>
