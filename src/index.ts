import { chromium, Page } from "playwright";

(async () => {
  // Launch browser
  const browser = await chromium.launch({
    headless: false,
    channel: "chrome"
  });

  // Create a new context
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://www.youtube.com/
  await page.goto("https://www.youtube.com/");

  // Click [placeholder="Pesquisar"]
  await page.click('[placeholder="Pesquisar"]');

  // Fill [placeholder="Pesquisar"]
  await page.fill('[placeholder="Pesquisar"]', "dua lipa physical");

  // Press Enter
  await page.press('[placeholder="Pesquisar"]', "Enter");
  // assert.equal(page.url(), 'https://www.youtube.com/results?search_query=dua+lipa+physical');

  // Click text=Dua Lipa - Physical (Official Video)
  await page.click("text=Dua Lipa - Physical (Official Video)");
  // assert.equal(page.url(), 'https://www.youtube.com/watch?v=9HDEHj2yzew');

  // Click button:has-text("Pular anúncios")
  await page.click('button:has-text("Pular anúncios")');

  // Click #info-contents >> text=Dua Lipa - Physical (Official Video)
  await page.click("#info-contents >> text=Dua Lipa - Physical (Official Video)");

  // Press ArrowDown
  await pressArrowDown(page);

  // Click text=Adicionar um comentário público...
  await Promise.all([page.waitForNavigation(/*{ url: '' }*/), page.click("text=Adicionar um comentário público...")]);

  await page.waitForTimeout(5000);

  // Go to https://www.youtube.com/watch?v=9HDEHj2yzew
  await page.goto("https://www.youtube.com/watch?v=9HDEHj2yzew");

  // Close page
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();

async function pressArrowDown(page: Page) {
  return Promise.all([
    page.press(
      'body:has-text("Voltar BR Pular navegação Pesquisar Pesquisar Fazer login BR Início Início Explo")',
      "ArrowDown"
    ),
    page.press(
      'body:has-text("Voltar BR Pular navegação Pesquisar Pesquisar Fazer login BR Início Início Explo")',
      "ArrowDown"
    ),
    page.press(
      'body:has-text("Voltar BR Pular navegação Pesquisar Pesquisar Fazer login BR Início Início Explo")',
      "ArrowDown"
    ),
    page.press(
      'body:has-text("Voltar BR Pular navegação Pesquisar Pesquisar Fazer login BR Início Início Explo")',
      "ArrowDown"
    ),
    page.press(
      'body:has-text("Voltar BR Pular navegação Pesquisar Pesquisar Fazer login BR Início Início Explo")',
      "ArrowDown"
    ),
    page.press(
      'body:has-text("Voltar BR Pular navegação Pesquisar Pesquisar Fazer login BR Início Início Explo")',
      "ArrowDown"
    ),
    page.press(
      'body:has-text("Voltar BR Pular navegação Pesquisar Pesquisar Fazer login BR Início Início Explo")',
      "ArrowDown"
    ),
    page.press(
      'body:has-text("Voltar BR Pular navegação Pesquisar Pesquisar Fazer login BR Início Início Explo")',
      "ArrowDown"
    ),
    page.press(
      'body:has-text("Voltar BR Pular navegação Pesquisar Pesquisar Fazer login BR Início Início Explo")',
      "ArrowDown"
    ),
    page.press(
      'body:has-text("Voltar BR Pular navegação Pesquisar Pesquisar Fazer login BR Início Início Explo")',
      "ArrowDown"
    )
  ]);
}
