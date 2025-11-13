variable "region" {
  description = "AWS region"
  type        = string
  default     = "eu-west-1"
}

variable "project_name" {
  description = "Project name for resource naming"
  type        = string
  default     = "lewnix-site"
}

variable "domain_name" {
  description = "Domain name for the personal site"
  type        = string
  default     = "lewnix.com"
}

variable "aws_account_id" {
  description = "AWS account ID"
  type        = string
}
