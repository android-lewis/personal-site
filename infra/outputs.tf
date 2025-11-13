output "s3_bucket_name" {
  description = "S3 bucket name"
  value       = aws_s3_bucket.site.id
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.site.domain_name
}

output "route53_zone_id" {
  description = "Route53 hosted zone ID"
  value       = data.aws_route53_zone.personal_site.zone_id
}

output "route53_nameservers" {
  description = "Route53 nameservers for domain delegation"
  value       = data.aws_route53_zone.personal_site.name_servers
}

output "site_url" {
  description = "Site URL"
  value       = "https://${var.domain_name}"
}
