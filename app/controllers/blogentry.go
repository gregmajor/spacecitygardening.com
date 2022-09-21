package controllers

import (
	"github.com/revel/revel"
	"spacecitygardening.com/app/models"
	"time"
)

type BlogEntry struct {
	Common
}

func (c BlogEntry) Get(slug string) revel.Result {
	slogan := c.GetSlogan()

	entry := &models.BlogEntry{}

	entry.Id = 39079284879
	entry.Slug = slug
	entry.CreatedOn = time.Now().UTC().String()
	entry.CreatedBy = time.Now().UTC().String()
	entry.ModifiedOn = time.Now().UTC().String()
	entry.ModifiedBy = time.Now().UTC().String()
	entry.Title = "My First Post"
	entry.Body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	entry.Tags = ""
	entry.Status = "Published"

	return c.Render(slogan, entry)
}
