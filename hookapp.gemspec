# Ensure we require the local version and not one we might have installed already
require File.join([File.dirname(__FILE__),'lib','hook','version.rb'])
spec = Gem::Specification.new do |s|
  s.name = 'hookapp'
  s.version = Hook::VERSION
  s.author = 'Brett Terpstra'
  s.email = 'me@brettterpstra.com'
  s.homepage = 'https://brettterpstra.com'
  s.platform = Gem::Platform::RUBY
  s.summary = 'A CLI for Hook.app (macOS)'
  s.files = `git ls-files`.split("
")
  s.require_paths << 'lib'
  s.extra_rdoc_files = ['README.rdoc','hookapp.rdoc']
  s.rdoc_options << '--title' << 'hook' << '--main' << 'README.rdoc' << '-ri'
  s.bindir = 'bin'
  s.executables << 'hook'
  s.add_development_dependency('rake')
  s.add_development_dependency('rdoc')
  s.add_development_dependency('aruba')
  s.add_runtime_dependency('gli','2.19.0')
end
