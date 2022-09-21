package controllers

import (
	"github.com/revel/revel"
)

type About struct {
	Common
}

func (c About) Index() revel.Result {
	slogan := c.GetSlogan()

	return c.Render(slogan)
}
