# DEPLOYMENT & RELEASE MANAGEMENT {#deployment_guide}

### VERSION SCHEME

```

v[MAJOR].[MINOR].[PATCH]
v0.1.0 = Initial release
v0.2.0 = New feature (backward compatible)
v0.2.1 = Bug fix
v1.0.0 = Production ready


```


## ESTÁNDARES RÁPIDOS


```

- Aspecto	Estándar 
- Line length	100 chars
- Imports	stdlib → 3rd party → local
- Docstrings	Google format
- Type hints	Siempre
- Test coverage	≥80%
- Commits	Conventional



```



### DEPLOYMENT STEPS
From here, supposed that you have git installed and git credentials in order to continue: 


#### git config 

```bash


sudo pacman -S git
git --version 

# then copy clone : 
git clone git@github.com:Macreat/GCPDS-CW.git (via ssh)

# now enter to the repo 
cd ~/GCPDS-CD 

#now check status
git status



```

_after cloning and configuring the repository using HTTPS or SSH:_




```bash


# 1. Prepare release
git checkout main
git pull origin main
bumpversion patch  # or minor/major

# 2. Test
pytest tests/ --cov=src --cov-fail-under=80

# 3. Build
python setup.py sdist bdist_wheel

# 4. Create tag
git tag v$(python setup.py --version)
git push origin v$(python setup.py --version)

# 5. Create release notes
echo "Release v$(python setup.py --version)" > RELEASE.md

# 6. Archive
aws s3 cp dist/ s3://rf-spectrum-releases/v$(python setup.py --version)/

```

# QUICK REFERENCE - CONTROL VERSION 

##  PARA EMPEZAR UN NUEVO FEATURE

```bash
# 1. Actualizar main
git checkout main && git pull

# 2. Crear rama
git checkout -b feature/nombre-descriptivo

# 3. Hacer cambios, commit
git add .
git commit -m "feat(module): descripción clara"

# 4. Subir
git push origin feature/nombre-descriptivo

# 5. this AUTOMATICALLY CREATES A  Pull Request only for push verified and tested changes into our MAIN server 
# → Description
# → Checklist
# → Request review

```

## BEFORE COMMIT 

_USING gh actions automatization we just skip this step_ 

```bash



# Ejecutar tests
pytest tests/ -v

# Coverage check
pytest --cov=src --cov-report=html

# Linting
flake8 src/
black --check src/

# Type checking
mypy src/

```


## merge & release 

_THIS ALSO ITS going to be automatizated VIA actions on GH PERSONAL REPOSITORY_

```bash

# Merge feature (asumiendo PR approved)
git checkout main
git merge --squash feature/nombre
git push origin main

# Tag release
git tag -a v0.2.0 -m "Release v0.2.0"
git push origin v0.2.0

# Cleanup
git branch -d feature/nombre
```

## checklist

- [] run full test suite
- [] Review data and [`dictionary`](../../../../../ANE2/DICTIONARY.md)   (validate_data.py ejecutado)
- [x] Documentation updated 
- [] Performance benchmarks OK
- [] Sync with team (meeting)


