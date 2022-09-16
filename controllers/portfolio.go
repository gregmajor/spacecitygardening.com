package controllers

type PortfolioController struct {
	Common
}

func (this *PortfolioController) Get() {
	this.setLayout("portfolio/portfolio")
	this.setContent()
}

func (this *PortfolioController) setContent() {
}