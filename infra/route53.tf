# Reference existing Route53 hosted zone
data "aws_route53_zone" "personal_site" {
  name          = var.domain_name
  private_zone = false
}

# Route53 A record for the domain (points to CloudFront)
resource "aws_route53_record" "site_a" {
  zone_id = data.aws_route53_zone.personal_site.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

# Route53 AAAA record for IPv6 (points to CloudFront)
resource "aws_route53_record" "site_aaaa" {
  zone_id = data.aws_route53_zone.personal_site.zone_id
  name    = var.domain_name
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

# Route53 www subdomain A record
resource "aws_route53_record" "site_www_a" {
  zone_id = data.aws_route53_zone.personal_site.zone_id
  name    = "www.${var.domain_name}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}

# Route53 www subdomain AAAA record
resource "aws_route53_record" "site_www_aaaa" {
  zone_id = data.aws_route53_zone.personal_site.zone_id
  name    = "www.${var.domain_name}"
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}
