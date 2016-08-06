{
    'name': 'Theme Unify',
    'category': 'Website',
    'version': '1.0',
    'description': """
        """,
    'author': 'Yannick Buron (Clouder)',
    'depends': ['website'],
    'data': [
        'views/**/*.xml',
        'views/assets.xml',
        'views/headers.xml',
        'views/footers.xml',
        'views/themes.xml',
        'views/options.xml',
    ],
    # 'qweb': ['static/src/xml/header.xml'],
    'installable': True,
    'application': False,
}
