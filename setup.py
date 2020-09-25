from setuptools import setup, find_packages

setup(name='giveme5w1h',
      version='1.0.18',
      description="Extraction of the journalistic five W and one H questions (5W1H) from news articles.",
      long_description="""Giveme5W1H is an open source, easy-to-use system to that extracts phrases answering the journalist 5W1H questions to describe an article's main event: who did what, when, where, why, and how?""",
      classifiers=[
          'Development Status :: 4 - Beta',
          'Environment :: Console',
          'Intended Audience :: Developers',
          'Intended Audience :: Science/Research',
          'License :: OSI Approved :: Apache Software License',
          'Operating System :: MacOS',
          'Operating System :: Microsoft',
          'Operating System :: POSIX :: Linux',
          'Programming Language :: Python :: 3.6',
          'Topic :: Internet',
          'Topic :: Scientific/Engineering :: Information Analysis',
      ],
      entry_points={
          'console_scripts': [
              'giveme5w1h-rest = Giveme5W1H.examples.extracting.server:main',
              'giveme5w1h-corenlp = Giveme5W1H.examples.startup.environment:start'
          ],
      },
      keywords='question answering news event detection event extraction 5w fivew 5w1h fivewoneh question-answering qa reporters questions',
      author='Felix Hamborg',
      author_email='felix.hamborg@uni-konstanz.de',
      url='https://github.com/fhamborg/Giveme5W1H',
      download_url='https://github.com/fhamborg/Giveme5W1H',
      license='Apache License 2.0',
      packages=find_packages(exclude=['ez_setup', 'examples', 'tests']),
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'unidecode',
          'jinja2>=2.10.1',
          'requests>=2.20.0',
          'xmltodict',
          'nltk>=3.1.2',
          'flask>=1.0.1',
          'editdistance>=0.3.1',
          'geopy>=1.11.0',
          'parsedatetime>=2.2',
          'pycorenlp>=0.3.0',
          'python_dateutil>=2.6',
          'lxml',
          'numpy',
          'pandas',
          'parsedatetime',
          'plotly',
          'pycorenlp',
          'spacy',
          'Twisted',
          'Unidecode'
      ],
      extras_require={
      }
      )
