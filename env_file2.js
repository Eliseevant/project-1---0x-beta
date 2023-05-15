file { '/etc/example.conf':
  ensure => '...',
}

docker::run { 'example':
  image   => 'example:latest',
  volumes => ['/etc/example.conf:/etc/example.conf'],
}