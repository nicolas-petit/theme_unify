{
    'name': 'Theme Unify',
    'category': 'Website',
    'version': '1.0',
    'description': """
        """,
    'author': 'Yannick Buron (Clouder)',
    'depends': ['website'],
    'data': [
        'views/features/*.xml',
        'views/specials/assets.xml',
        'views/specials/headers.xml',
        'views/specials/footers.xml',
        'views/specials/themes.xml',
        'views/specials/options.xml',
    ],
    # 'qweb': ['static/src/xml/header.xml'],
    'installable': True,
    'application': False,
}
