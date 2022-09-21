package models

type BlogEntry struct {
	Id         int64  `orm:"auto"`
	Slug       string `orm:"size(128)"`
	CreatedOn  string `orm:"size(128)"`
	CreatedBy  string `orm:"size(128)"`
	ModifiedOn string `orm:"size(128)"`
	ModifiedBy string `orm:"size(128)"`
	Title      string `orm:"size(128)"`
	Body       string `orm:"type(longtext)"`
	Tags       string `orm:"size(128)"`
	Status     string `orm:"size(128)"`
}
