provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "jenkins" {
  ami           = "ami-0f5ee92e2d63afc18" # Ubuntu 22.04 (Mumbai)
  instance_type = "t3.micro"

  tags = {
    Name = "Jenkins-Server"
  }

  vpc_security_group_ids = ["sg-002f73ffc84acfe62"]
  key_name = "devops-key"
}
