package controllers

import (
	"github.com/revel/revel"
)

type Blog struct {
	Common
}

func (c Blog) Index() revel.Result {
	slogan := c.GetSlogan()

	return c.Render(slogan)
}

func (c Blog) Get(slug string) revel.Result {
	slogan := c.GetSlogan()

	return c.Render(slogan)
}
