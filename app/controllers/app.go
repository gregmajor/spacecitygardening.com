package controllers

import (
	"github.com/revel/revel"
)

type App struct {
	Common
}

func (c App) Index() revel.Result {
	slogan := c.GetSlogan()

	return c.Render(slogan)
}
